import { Box } from "@chakra-ui/react";

import MarkdownText from "@components/MarkdownText";
import { STRINGS } from "@constants";

const UsageBody = () => {
  return (
    <Box>
      <MarkdownText fontSize="large">
        {STRINGS.docs.usage.writingTheScript}
      </MarkdownText>
      <MarkdownText fontSize="large" mt={4}>
        {STRINGS.docs.usage.beforeRunning}
      </MarkdownText>
      <MarkdownText fontSize="large" mt={4}>
        {STRINGS.docs.usage.monitor}
      </MarkdownText>
      <MarkdownText fontSize="large">
        {STRINGS.docs.usage.errorHandling}
      </MarkdownText>
    </Box>
  );
};

export default UsageBody;
