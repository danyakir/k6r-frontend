import {
  AccordionButton,
  AccordionIcon,
  AccordionItem as ChakraAccordionItem,
  AccordionPanel,
  Box,
  Heading,
} from "@chakra-ui/react";
import { FC, ReactNode } from "react";

type Props = {
  title: string;
  body: ReactNode;
};

const AccordionItem: FC<Props> = ({ title, body }: Props) => {
  return (
    <ChakraAccordionItem border="none">
      <Heading>
        <AccordionButton>
          <Box
            as="span"
            flex="1"
            textAlign="left"
            fontSize="xl"
            fontWeight="bold"
          >
            {title}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </Heading>
      <AccordionPanel>{body}</AccordionPanel>
    </ChakraAccordionItem>
  );
};

export default AccordionItem;
