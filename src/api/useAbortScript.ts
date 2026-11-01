import { useMutation, useQueryClient } from "@tanstack/react-query";

import { STRINGS } from "@constants";

import { scriptsService } from "./services/ScriptsService";

export const useAbortScript = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: STRINGS.queriesKeys.abortScript,
    mutationFn: scriptsService.abortScript,
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: STRINGS.queriesKeys.getScripts,
      });
    },
    retry: false,
  });
};
