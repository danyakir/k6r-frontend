import { Box, Flex } from "@chakra-ui/react";
import { FC, Fragment } from "react";
import { Outlet } from "react-router-dom";

import { SidebarContent } from "@components/sidebar";
import { STRINGS } from "@constants";

const RootLayout: FC = () => {
  return (
    <Fragment key={STRINGS.pages.rootLayout}>
      <Flex width="100%" height="100vh">
        <SidebarContent />
        <Box flex="1">
          <Outlet />
        </Box>
      </Flex>
    </Fragment>
  );
};

export default RootLayout;
