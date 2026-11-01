import { useQuery } from "@tanstack/react-query";

import { showToast } from "@components/Toast";
import { STRINGS } from "@constants";

import { scriptsService } from "./services/ScriptsService";

export const useScriptsHistory = () =>
  useQuery({
    queryKey: STRINGS.queriesKeys.getScriptsHistory,
    queryFn: scriptsService.getHistory,
    throwOnError: () => {
      showToast(STRINGS.errors.internalServerError, "error");
      return false;
    },
  });
