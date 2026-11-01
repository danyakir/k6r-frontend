import { Box, Heading, Skeleton } from "@chakra-ui/react";
import { Fragment } from "react";

import { useScriptsHistory } from "@api";
import { HistoryTable } from "@components/history";
import TopRightLoading from "@components/TopRightLoading";
import { STRINGS } from "@constants";

const ScriptsHistory = () => {
  const { data, isLoading, isFetching, isSuccess } = useScriptsHistory();
  const shouldShowTopRightLoading = !isLoading && isFetching;
  const shouldShowNoHistory = isSuccess && data.length == 0;
  const shouldShowTable = !!data?.length && isSuccess;

  return (
    <Fragment key={STRINGS.pages.monitorScriptPage}>
      {isLoading && (
        <Skeleton mt={8}>
          <Box boxSize="lg"></Box>
        </Skeleton>
      )}

      {shouldShowTopRightLoading && <TopRightLoading />}

      {shouldShowNoHistory && (
        <Heading mt={4}>{STRINGS.historyTable.noHistory}</Heading>
      )}

      {shouldShowTable && <HistoryTable executions={data} />}
    </Fragment>
  );
};

export default ScriptsHistory;
