import { Box, Heading, Skeleton } from "@chakra-ui/react";
import { FC, Fragment } from "react";

import { useScripts } from "@api";
import { ScriptsTable } from "@components/scripts";
import TopRightLoading from "@components/TopRightLoading";
import { STRINGS } from "@constants";

const Scripts: FC = () => {
  const { data, isLoading, isFetching, isSuccess } = useScripts();
  const shouldShowTopRightLoading = !isLoading && isFetching;
  const shouldShowNoScripts = isSuccess && data.length == 0;
  const shouldShowTable = !!data?.length && isSuccess;

  return (
    <Fragment key={STRINGS.pages.allScriptsPage}>
      {isLoading && (
        <Skeleton mt={8}>
          <Box boxSize="lg" />
        </Skeleton>
      )}

      {shouldShowTopRightLoading && <TopRightLoading />}

      {shouldShowNoScripts && (
        <Heading mt={4}>{STRINGS.scriptsTable.noScripts}</Heading>
      )}

      {shouldShowTable && <ScriptsTable scripts={data} />}
    </Fragment>
  );
};

export default Scripts;
