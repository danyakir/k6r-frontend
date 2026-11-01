import { Td, Tr } from "@chakra-ui/react";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

import { COLORS } from "@constants";
import { Execution } from "@types";
import { dateToString, getMonitorPageUrl } from "@utils";

import StatusCell from "./StatusCell";

type Props = {
  execution: Execution;
};

const HistoryTableRow: FC<Props> = ({ execution }: Props) => {
  const navigate = useNavigate();

  return (
    <Tr
      key={execution.id}
      _hover={{ bg: COLORS.main.defaultPurple, cursor: "pointer" }}
      onClick={() => {
        navigate(getMonitorPageUrl(execution));
      }}
    >
      <Td maxW="20%" w="20%">
        {execution.name}
      </Td>
      <Td maxW="20%" w="20%" padding={0} height={45} textAlign="center">
        <StatusCell status={execution.status} />
      </Td>
      <Td w="20%" maxW="20%" textAlign="center">
        {dateToString(execution.startTime)}
      </Td>
      <Td w="20%" maxW="20%" textAlign="center">
        {dateToString(execution.endTime)}
      </Td>
      <Td w="10%" maxW="10%" textAlign="center">
        {execution.maxVus}
      </Td>
      <Td w="10%" maxW="10%" textAlign="center">
        {execution.responseTime}
      </Td>
    </Tr>
  );
};

export default HistoryTableRow;
