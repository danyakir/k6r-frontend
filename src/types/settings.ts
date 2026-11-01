export interface Settings {
  gitlabUrl?: string;
  gitlabToken?: string;
  ocUrl?: string;
  ocToken?: string;
  ocNamespace?: string;
  scriptsRoute?: string;
  prometheusUrl?: string;
  branchName?: string;
  enviormentParams: EnvParams[];
}

export type EnvParams = {
  name: string;
  value: string;
};

export function validateSettings(obj: any): asserts obj is Settings {
  if (obj.gitlabUrl && typeof obj.gitlabUrl !== "string") {
    throw new Error("Invalid settings: gitlabUrl must be string");
  }

  if (obj.gitlabToken && typeof obj.gitlabToken !== "string") {
    throw new Error("Invalid settings: gitlabToken must be string");
  }

  if (obj.ocUrl && typeof obj.ocUrl !== "string") {
    throw new Error("Invalid settings: ocUrl must be string");
  }

  if (obj.ocToken && typeof obj.ocToken !== "string") {
    throw new Error("Invalid settings: ocToken must be string");
  }

  if (obj.ocNamespace && typeof obj.ocNamespace !== "string") {
    throw new Error("Invalid settings: ocNamespace must be string");
  }

  if (obj.scriptsRoute && typeof obj.scriptsRoute !== "string") {
    throw new Error("Invalid settings: scriptsRoute must be string");
  }

  if (obj.prometheusUrl && typeof obj.prometheusUrl !== "string") {
    throw new Error("Invalid settings: prometheusUrl must be string");
  }

  if (obj.branchName && typeof obj.branchName !== "string") {
    throw new Error("Invalid settings: branchName must be string");
  }

  if (
    !Array.isArray(obj.enviormentParams) ||
    !obj.enviormentParams.every((param: { name: string; value: string }) => {
      return (
        typeof param === "object" &&
        typeof param.name === "string" &&
        typeof param.value === "string"
      );
    })
  ) {
    throw new Error("Invalid settings: enviormentParams is invalid");
  }
}
