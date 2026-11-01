import { Box, Spinner } from "@chakra-ui/react";

import { COLORS } from "@constants";

const TopRightLoading = () => (
  <Box position="fixed" top="1rem" right="1rem" zIndex="tooltip">
    <Spinner size="lg" color={COLORS.main.defaultPurple} />
  </Box>
);

export default TopRightLoading;
