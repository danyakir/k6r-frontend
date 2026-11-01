export type Execution = {
  id: string;
  name: string;
  startTime: Date;
  endTime?: Date;
  maxVus?: number;
  responseTime?: string;
  status: Status;
  groupName: string;
};

export type Status = "running" | "completed" | "failed" | "aborted";

const statuses: Status[] = ["running", "completed", "failed", "aborted"];

export function validateExecution(obj: any): asserts obj is Execution {
  if (typeof obj.id !== "string") {
    throw new Error("Invalid execution: id must be string");
  }

  if (typeof obj.name !== "string") {
    throw new Error("Invalid execution: name must be string");
  }

  if (typeof obj.startTime !== "object") {
    throw new Error("Invalid execution: startTime must be object");
  }

  if (obj.endTime && typeof obj.endTime !== "object") {
    throw new Error("Invalid execution: endTime must be object");
  }

  if (obj.maxVus && typeof obj.maxVus !== "number") {
    throw new Error("Invalid execution: maxVus must be number");
  }

  if (obj.responseTime && typeof obj.responseTime !== "string") {
    throw new Error("Invalid execution: responseTime must be string");
  }

  if (!statuses.includes(obj.status)) {
    throw new Error("Invalid execution: status must be Status");
  }

  if (typeof obj.groupName !== "string") {
    throw new Error("Invalid execution: groupName must be string");
  }
}
