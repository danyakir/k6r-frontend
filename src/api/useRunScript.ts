import { useMutation } from "@tanstack/react-query";

import { STRINGS } from "@constants";

import { scriptsService } from "./services/ScriptsService";

export const useRunScript = () =>
  useMutation({
    mutationKey: STRINGS.queriesKeys.runScript,
    mutationFn: scriptsService.runScript,
    retry: false,
  });
