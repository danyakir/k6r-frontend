import { Flex, IconButton, Spinner } from "@chakra-ui/react";
import { FC } from "react";
import { FaPlay, FaStop } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import { useRunScript, useRunningScript } from "@api";
import { useAbortScript } from "@api";
import { Execution } from "@types";
import { getMonitorPageUrl } from "@utils";

type Props = {
  id: string;
  isRunning: boolean;
};

const PlayButton: FC<Props> = ({ id, isRunning }: Props) => {
  const navigate = useNavigate();
  const runScript = useRunScript();
  const abortScript = useAbortScript();
  const runningScript = useRunningScript(id);

  const handlePressingLoadIcon = async () => {
    const { data } = await runningScript.refetch();

    if (data) {
      navigate(getMonitorPageUrl(data));
    }
  };

  const handlePressingAbort = () => abortScript.mutate(id);

  const handlePressingRun = () =>
    runScript.mutate(id, {
      onSuccess: (execution: Execution) => {
        navigate(getMonitorPageUrl(execution));
      },
    });

  return isRunning ? (
    <>
      <Flex align="center" justify="center">
        <Spinner size="md" cursor="pointer" onClick={handlePressingLoadIcon} />
        <IconButton
          aria-label="abort"
          size="sm"
          ml={8}
          icon={<FaStop />}
          onClick={handlePressingAbort}
        />
      </Flex>
    </>
  ) : (
    <IconButton
      aria-label="run"
      cursor="pointer"
      size="sm"
      icon={<FaPlay />}
      onClick={handlePressingRun}
    />
  );
};

export default PlayButton;
