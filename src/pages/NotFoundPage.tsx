import { Button, Flex, Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import { STRINGS } from "@constants";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <Flex
      height="65vh"
      justifyContent="center"
      alignItems="center"
      direction="column"
      mt={3}
    >
      <Heading size="2xl">{STRINGS.notFound.title}</Heading>
      <Heading size="lg" marginTop={4}>
        {STRINGS.notFound.description}
      </Heading>
      <Button marginTop={8} onClick={() => navigate("/")}>
        {STRINGS.buttons.backHome}
      </Button>
    </Flex>
  );
};

export default NotFoundPage;
