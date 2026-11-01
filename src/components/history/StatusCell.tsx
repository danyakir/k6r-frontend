import { Box } from "@chakra-ui/react";
import { FC } from "react";

import { COLORS } from "@constants";
import { Status } from "@types";

type Props = {
  status: Status;
};

const StatusCell: FC<Props> = ({ status }) => {
  const cellColor = COLORS.statusCell[status];

  return (
    <Box
      display="inline-flex"
      width="35%"
      height="50%"
      bg={cellColor}
      padding={0}
      rounded="2xl"
      alignItems="center"
      justifyContent="center"
    >
      {status}
    </Box>
  );
};

export default StatusCell;
