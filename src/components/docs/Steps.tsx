import { BoxProps } from "@chakra-ui/layout";
import {
  Box,
  Flex,
  IconButton,
  Image,
  useDisclosure,
  OrderedList,
  ListItem,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Button,
} from "@chakra-ui/react";
import { FC, useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { FaImages } from "react-icons/fa";

import MarkdownText from "@components/MarkdownText";
import { STRINGS } from "@constants";

interface Props extends BoxProps {
  steps: string[];
  images: string[];
}

const Steps: FC<Props> = ({ steps, images, ...boxProps }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % images.length);
  const previous = () =>
    setIndex((i) => (i - 1 + images.length) % images.length);

  return (
    <Box {...boxProps}>
      <OrderedList fontSize="large">
        {steps.map((step, i) => (
          <ListItem key={i}>
            <MarkdownText>{step}</MarkdownText>
          </ListItem>
        ))}
      </OrderedList>

      <Button
        aria-label="steps"
        mt={2}
        onClick={() => {
          setIndex(0);
          onOpen();
        }}
        leftIcon={<FaImages />}
      >
        {STRINGS.buttons.viewSteps}
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="6xl" isCentered>
        <ModalOverlay />
        <ModalContent maxW="80vw">
          <ModalBody
            display="flex"
            flexDir="column"
            alignItems="center"
            justifyContent="center"
          >
            <Flex
              padding={4}
              align="center"
              justify="center"
              position="relative"
              width="100%"
            >
              <IconButton
                aria-label="previous"
                variant="ghost"
                onClick={previous}
              >
                {<BiChevronLeft />}
              </IconButton>
              <Image
                src={images[index]}
                alt={`Image ${index + 1}`}
                objectFit="contain"
              />
              <IconButton aria-label="next" variant="ghost" onClick={next}>
                {<BiChevronRight />}
              </IconButton>
            </Flex>
            <Box textAlign="center" mt={2} fontSize="sm">
              Step {index + 1} of {images.length}
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Steps;
