import { Box, Heading, Skeleton } from "@chakra-ui/react";
import { FC, Fragment } from "react";

import { useSettings } from "@api";
import { Content } from "@components/settings";
import TopRightLoading from "@components/TopRightLoading";
import { STRINGS } from "@constants";

const Settings: FC = () => {
  const settings = useSettings();

  return (
    <Fragment key={STRINGS.pages.settingsPage}>
      <Box marginLeft={8}>
        <Heading size="2xl" marginTop={8} marginBottom={5}>
          {STRINGS.settings.title}
        </Heading>
        {settings.isLoading && (
          <Skeleton>
            <Box boxSize="lg" mt={4}></Box>
          </Skeleton>
        )}

        {!settings.isLoading && settings.isFetching && <TopRightLoading />}

        {settings.isSuccess && <Content settings={settings.data} />}
      </Box>
    </Fragment>
  );
};

export default Settings;
