import { useQueryClient } from "@tanstack/react-query";
import Cookies from "js-cookie";
import {
  FC,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { STRINGS } from "@constants";

const getGroups = (): string[] => {
  const groups = Cookies.get("groups");
  if (!groups) {
    return [];
  }

  try {
    return JSON.parse(groups) as string[];
  } catch {
    throw new Error("groups are not good");
  }
};

type CurrentGroupContext = {
  groups: string[];
  currentGroup: string;
  setCurrentGroup: (project: string) => void;
};

const CurrentGroupContext = createContext<CurrentGroupContext>({
  groups: getGroups(),
  currentGroup: getGroups()[0],
  setCurrentGroup: () => {},
});

type CurrentGroupProviderProps = { children: ReactNode };

export const CurrentGroupProvider: FC<CurrentGroupProviderProps> = ({
  children,
}) => {
  const queryClient = useQueryClient();
  const groups = getGroups();

  const [currentGroup, setCurrentGroup] = useState(() => {
    const saved = sessionStorage.getItem(STRINGS.sessionStorage.currentGroup);
    return saved ?? groups[0];
  });

  useEffect(() => {
    if (currentGroup) {
      sessionStorage.setItem(STRINGS.sessionStorage.currentGroup, currentGroup);
      queryClient.invalidateQueries();
    } else {
      sessionStorage.removeItem(STRINGS.sessionStorage.currentGroup);
    }
  }, [currentGroup]);

  return (
    <CurrentGroupContext.Provider
      value={{
        groups: groups,
        currentGroup: currentGroup,
        setCurrentGroup: setCurrentGroup,
      }}
    >
      {children}
    </CurrentGroupContext.Provider>
  );
};

export const useCurrentGroup = () => useContext(CurrentGroupContext);
