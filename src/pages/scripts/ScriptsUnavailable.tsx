import { Button, Flex, Heading, Stack } from "@chakra-ui/react";
import { Fragment } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import { STRINGS } from "@constants";

const ScriptsUnavailable = () => {
  const navigate = useNavigate();
  const [queryParams] = useSearchParams();

  const message = queryParams.get("message");

  return (
    <Fragment key={STRINGS.pages.scriptsUnavailablePage}>
      <Flex
        height="65vh"
        justifyContent="center"
        alignItems="center"
        direction="column"
        mt={3}
      >
        <Heading mb={3}>{STRINGS.errors.scriptsUnavailable}</Heading>
        {message && (
          <Heading size="lg" mb={3}>
            {message}
          </Heading>
        )}
        <Stack direction="row" spacing={8}>
          <Button
            mt={3}
            width="fit-content"
            onClick={() => navigate("/settings")}
          >
            Go To Settings
          </Button>
          <Button mt={3} width="fit-content" onClick={() => navigate("/docs")}>
            Go To Docs
          </Button>
        </Stack>
      </Flex>
    </Fragment>
  );
};

export default ScriptsUnavailable;
