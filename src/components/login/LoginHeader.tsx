import { Heading } from "@chakra-ui/react";
import { FC } from "react";

type Props = {
  headerText: string;
  subHeaderText: string;
};

const LoginHeader: FC<Props> = ({ headerText, subHeaderText }: Props) => {
  return (
    <>
      <Heading>{headerText}</Heading>
      <Heading size="lg" mb={3}>
        {subHeaderText}
      </Heading>
    </>
  );
};

export default LoginHeader;
