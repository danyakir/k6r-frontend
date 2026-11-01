import { useMutation, useQueryClient } from "@tanstack/react-query";

import { showToast } from "@components/Toast";
import { STRINGS } from "@constants";

import { SettingsService } from "./services/SettingsService";

export const useEditSettings = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: STRINGS.queriesKeys.editSettings,
    mutationFn: SettingsService.editSetting,
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: STRINGS.queriesKeys.getSettings,
      });
    },
    onSuccess: () => {
      showToast(STRINGS.messages.savedSuccssfully, "success");
    },
    retry: false,
  });
};
