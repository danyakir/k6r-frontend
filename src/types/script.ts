export interface Script {
  id: string;
  name: string;
  description?: string;
  memory: number;
  cpu: number;
  lastRun?: Date;
  isRunning: boolean;
  groupName: string;
}

export type EditableScriptProps =
  | {
      description: string;
    }
  | {
      memory: number;
    }
  | {
      cpu: number;
    };

export function validateScript(obj: any): asserts obj is Script {
  if (typeof obj.id !== "string") {
    throw new Error("Invalid script: id must be string");
  }

  if (typeof obj.name !== "string") {
    throw new Error("Invalid script: name must be string");
  }

  if (obj.description && typeof obj.description !== "string") {
    throw new Error("Invalid description: id must be string");
  }

  if (typeof obj.memory !== "number") {
    throw new Error("Invalid script: memory must be number");
  }

  if (typeof obj.cpu !== "number") {
    throw new Error("Invalid script: cpu must be number");
  }

  if (obj.lastRun && typeof obj.lastRun !== "object") {
    throw new Error("Invalid script: lastRun must be object");
  }

  if (typeof obj.isRunning !== "boolean") {
    throw new Error("Invalid script: isRunning must be boolean");
  }

  if (typeof obj.groupName !== "string") {
    throw new Error("Invalid script: isRunning must be boolean");
  }
}
