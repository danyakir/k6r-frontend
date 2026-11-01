import { Execution } from "@types";

export const getMonitorPageUrl = (execution: Execution): string => {
  if (execution.endTime) {
    return `/scripts/monitor?name=${execution.name}&id=${
      execution.id
    }&startTime=${execution.startTime.toISOString()}&endTime=${execution.endTime.toISOString()}`;
  } else {
    return `/scripts/monitor?name=${execution.name}&id=${
      execution.id
    }&startTime=${execution.startTime.toISOString()}`;
  }
};
