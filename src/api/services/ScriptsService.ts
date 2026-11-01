import {
  EditableScriptProps,
  Script,
  validateScript,
  Execution,
  validateExecution,
} from "@types";

import axiosInstance from "../client";

export const scriptsService = {
  getAllScripts: async (): Promise<Script[]> => {
    const raw = await axiosInstance.get("/scripts/get");
    const parsed = raw.data.map((script: any) => ({
      ...script,
      lastRun: script.lastRun ? new Date(script.lastRun) : undefined,
    }));
    parsed.forEach(validateScript);

    return parsed;
  },

  editScript: async ({
    id,
    diff,
  }: {
    id: Script["id"];
    diff: EditableScriptProps;
  }) =>
    await axiosInstance.put(`/scripts/${id}`, {
      diff,
    }),

  runScript: async (id: Script["id"]): Promise<Execution> => {
    const raw = (await axiosInstance.post(`/scripts/run/${id}`)).data;
    const parsed = {
      ...raw,
      startTime: new Date(raw.startTime),
      endTime: raw.endTime ? new Date(raw.endTime) : undefined,
    };
    validateExecution(parsed);

    return parsed;
  },

  abortScript: async (id: Script["id"]): Promise<void> =>
    axiosInstance.post(`/scripts/abort/${id}`),

  getRunningScript: async (id: Script["id"]): Promise<Execution> => {
    const raw = (await axiosInstance.get(`scripts/running/${id}`)).data;
    const parsed = {
      ...raw,
      startTime: new Date(raw.startTime),
      endTime: raw.endTime ? new Date(raw.endTime) : undefined,
    };
    validateExecution(parsed);

    return parsed;
  },

  getHistory: async (): Promise<Execution[]> => {
    const raw = await axiosInstance.get("/scripts/history");
    const parsed = raw.data.map((execution: any) => ({
      ...execution,
      startTime: new Date(execution.startTime),
      endTime: execution.endTime ? new Date(execution.endTime) : undefined,
    }));

    parsed.forEach(validateExecution);

    return parsed;
  },
};
