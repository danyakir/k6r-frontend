import { useQuery } from "@tanstack/react-query";

import { STRINGS } from "@constants";

import { scriptsService } from "./services/ScriptsService";

export const useRunningScript = (id: string) =>
  useQuery({
    queryKey: STRINGS.queriesKeys.getRunningScript(id),
    queryFn: () => scriptsService.getRunningScript(id),
    enabled: false,
    retry: false,
  });
