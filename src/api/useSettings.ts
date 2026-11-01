import { useQuery } from "@tanstack/react-query";

import { showToast } from "@components/Toast";
import { STRINGS } from "@constants";

import { SettingsService } from "./services/SettingsService";

export const useSettings = () =>
  useQuery({
    queryKey: STRINGS.queriesKeys.getSettings,
    queryFn: SettingsService.getSettings,
    throwOnError: () => {
      showToast(STRINGS.errors.internalServerError, "error");
      return false;
    },
  });
