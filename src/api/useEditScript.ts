import { useMutation, useQueryClient } from "@tanstack/react-query";

import { showToast } from "@components/Toast";
import { STRINGS } from "@constants";

import { scriptsService } from "./services/ScriptsService";

export const useEditScript = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: STRINGS.queriesKeys.editScript,
    mutationFn: scriptsService.editScript,
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: STRINGS.queriesKeys.getScripts,
      });
    },
    onSuccess: () => {
      showToast(STRINGS.messages.savedSuccssfully, "success");
    },
    retry: false,
  });
};
