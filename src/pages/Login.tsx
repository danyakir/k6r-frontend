import { Button, Flex } from "@chakra-ui/react";
import { FC, Fragment } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import { STRINGS } from "@constants";
import LoginHeader from "@components/login/LoginHeader";

const Login: FC = () => {
  const navigate = useNavigate();
  const [queryParams] = useSearchParams();

  const errorMessage = queryParams.get("message");

  return (
    <Fragment key={STRINGS.pages.loginPage}>
      <Flex
        height="100vh"
        justifyContent="center"
        alignItems="center"
        direction="column"
      >
        {errorMessage ? (
          <LoginHeader
            headerText={STRINGS.errors.authenticationFailed}
            subHeaderText={errorMessage}
          />
        ) : (
          <LoginHeader
            headerText={STRINGS.common.intro}
            subHeaderText={STRINGS.common.description}
          />
        )}
        <Button onClick={() => navigate("/")}>{STRINGS.buttons.login}</Button>
      </Flex>
    </Fragment>
  );
};

export default Login;
