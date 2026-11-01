import { Settings, validateSettings } from "@types";

import axiosInstance from "../client";

export const SettingsService = {
  getSettings: async (): Promise<Settings> => {
    const raw = (await axiosInstance.get("/settings/get")).data;

    validateSettings(raw);
    return raw;
  },

  editSetting: async (settings: Settings) =>
    await axiosInstance.post("/settings/change", settings),
};
