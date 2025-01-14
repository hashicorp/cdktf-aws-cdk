/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { createHash } from "crypto";
import { javascript } from "projen";

export enum Schedule {
  Daily = "DAILY",
  Weekly = "WEEKLY",
  Monthly = "MONTHLY",
  Weekdays = "WEEKDAYS",
}

export interface RandomCronOptions {
  project: javascript.NodeProject;
  maxHour?: number;
  hourOffset?: number;
  schedule?: Schedule;
}

export function generateRandomCron(options: RandomCronOptions) {
  const maxHour =
    typeof options.maxHour !== "undefined" ? Math.round(options.maxHour) : 24;
  const hourOffset = options.hourOffset ? Math.round(options.hourOffset) : 0;
  const schedule = options.schedule || Schedule.Daily; // default to daily

  const project = options.project;
  const hash = createHash("md5").update(project.name).digest("hex");
  const hour = maxHour === 0 ? 0 : parseInt(hash.slice(0, 2), 16) % maxHour;
  const minute = parseInt(hash.slice(2, 4), 16) % 60;

  const dayOfMonth = schedule === Schedule.Monthly ? "1" : "*";
  const dayOfWeek =
    schedule === Schedule.Weekly
      ? "1"
      : schedule === Schedule.Weekdays
      ? "1-5"
      : "*";

  return `${minute} ${(hour + hourOffset) % 24} ${dayOfMonth} * ${dayOfWeek}`;
}
