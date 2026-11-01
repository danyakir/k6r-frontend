import { Box, BoxProps } from "@chakra-ui/react";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import { FC } from "react";
import ReactMarkdown from "react-markdown";
import rehypeExternalLinks from "rehype-external-links";
import remarkBreaks from "remark-breaks";

interface Props extends BoxProps {
  children: string;
}

const MarkdownText: FC<Props> = ({ children, ...boxProps }) => {
  return (
    <Box {...boxProps} marginBottom={0}>
      <ReactMarkdown
        components={ChakraUIRenderer()}
        remarkPlugins={[remarkBreaks]}
        rehypePlugins={[
          [
            rehypeExternalLinks,
            { target: "_blank", rel: ["noopener", "noreferrer"] },
          ],
        ]}
      >
        {children}
      </ReactMarkdown>
    </Box>
  );
};

export default MarkdownText;
