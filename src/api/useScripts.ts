import { keepPreviousData, useQuery } from "@tanstack/react-query";

import { showToast } from "@components/Toast";
import { STRINGS } from "@constants";

import { scriptsService } from "./services/ScriptsService";

export const useScripts = () => {
  return useQuery({
    queryKey: STRINGS.queriesKeys.getScripts,
    queryFn: scriptsService.getAllScripts,
    placeholderData: keepPreviousData,
    throwOnError: () => {
      showToast(STRINGS.errors.internalServerError, "error");
      return false;
    },
  });
};
