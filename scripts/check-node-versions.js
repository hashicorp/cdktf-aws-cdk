/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
const today = new Date();
const oneMonthFromToday = new Date();
oneMonthFromToday.setDate(today.getDate() + 30);
// console.debug("oneMonthFromToday", oneMonthFromToday.toDateString());

// Code below adapted from https://stackoverflow.com/a/71520193
const versionRegex = /v(\d+)\.(\d+)\.(\d+)/; // 'v16.14.3'

// convert version string to a number for easier sorting
function calcVersion(x) {
    const match = x.match(versionRegex);
    if (!match) {
        throw new Error(`version regex failed to match version string '${x}'`);
    }
    return (+match[1] * 1000000) + (+match[2] * 1000) + (+match[3]);
}

async function getLTSVersions() {
  const response = await fetch("https://nodejs.org/download/release/index.json");
  const data = await response.json();
  const allLTSVersions = data.filter(item => item.lts);

  // for performance reasons when sorting,
  // precalculate an actual version number from the version string
  allLTSVersions.forEach(item => item.numVersion = calcVersion(item.version));
  allLTSVersions.sort((a, b) => a.numVersion - b.numVersion);

  // console.debug("All LTS versions - sorted oldest first");
  // console.debug(allLTSVersions.map(item => item.version));

  const firstLTSVersions = {};
  allLTSVersions.forEach((item) => {
    const majorVersion = `v${item.version.match(versionRegex)[1]}`;
    if (!firstLTSVersions[majorVersion]) {
      firstLTSVersions[majorVersion] = item.version;
    }
  });

  console.debug("First LTS versions");
  console.debug(firstLTSVersions);

  return firstLTSVersions;
}

/** Return the earliest supported version whose EOL date is at least a month away */
async function getEarliestSupportedVersion() {
  // https://github.com/nodejs/Release/blob/main/schedule.json
  const response = await fetch("https://raw.githubusercontent.com/nodejs/Release/main/schedule.json");
  const data = await response.json();
  const activelySupportedVersions = Object.entries(data).filter(([version, metadata]) => {
    return new Date(metadata.lts) <= today && new Date(metadata.end) > oneMonthFromToday;
  }).sort((a, b) => new Date(a[1].start) - new Date(b[1].start));

  console.debug("Actively supported versions with an EOL date at least 1 month away")
  console.debug(Object.fromEntries(activelySupportedVersions));

  return activelySupportedVersions[0][0];
}

async function getDesiredVersion() {
  const ltsVersions = await getLTSVersions();
  const earliestSupportedVersion = await getEarliestSupportedVersion();
  const version = ltsVersions[earliestSupportedVersion];

  // console.debug("earliestSupportedVersion", earliestSupportedVersion);
  console.log("desired version", version);

  return version;
}

module.exports = async ({github, context, core}) => {
  const version = await getDesiredVersion();
  const short = version.match(versionRegex)[1];

  core.exportVariable('NEW_NODEJS_VERSION', version.slice(1)); // strip the 'v' from the start of the string
  core.exportVariable('NEW_NODEJS_VERSION_SHORT', short);
}
