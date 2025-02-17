/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
const today = new Date();
const oneMonthFromToday = new Date();
oneMonthFromToday.setDate(today.getDate() + 30);
// console.debug("oneMonthFromToday", oneMonthFromToday.toDateString());

/** Return the earliest supported version whose EOS date is at least a month away */
async function getEarliestSupportedVersion() {
  // https://github.com/aws/jsii-compiler/blob/main/releases.json
  const response = await fetch("https://raw.githubusercontent.com/aws/jsii-compiler/main/releases.json");
  const data = await response.json();
  const activelySupportedVersions = Object.entries(data.maintenance).filter(([version, supportEndDate]) => {
    return new Date(supportEndDate) > oneMonthFromToday;
  }).sort((a, b) => {
    // Very naive sorting function: treat "5.4" like (int) 54, "5.5" like (int) 55, etc. and compare accordingly
    return parseInt(a[0].replace(".", ""), 10) > parseInt(b[0].replace(".", ""), 10);
  });

  console.debug("Actively supported versions with an EOS date at least 1 month away")
  console.debug(Object.fromEntries(activelySupportedVersions));

  return activelySupportedVersions[0][0];
}

async function getDesiredVersion() {
  const earliestSupportedVersion = await getEarliestSupportedVersion();
  console.debug("earliestSupportedVersion", earliestSupportedVersion);

  return earliestSupportedVersion;
}

module.exports = async ({github, context, core}) => {
  const version = await getDesiredVersion();

  core.exportVariable('NEW_JSII_VERSION', version + ".0"); // e.g. "5.4.0"
  core.exportVariable('NEW_JSII_VERSION_SHORT', version); // e.g. "5.4"
  core.exportVariable('NEW_JSII_VERSION_MAJOR', version.split(".")[0]); // e.g. "5"
  core.exportVariable('NEW_JSII_VERSION_MINOR', version.split(".")[1]); // e.g. "4"
}
