import { Table, Tbody, Th, Thead, Tooltip, Tr } from "@chakra-ui/react";
import { FC } from "react";

import { COLORS, STRINGS } from "@constants";
import { Execution } from "@types";

import HistoryTableRow from "./HistoryTableRow";

type Props = {
  executions: Execution[];
};

const HistoryTable: FC<Props> = ({ executions }: Props) => {
  return (
    <>
      <Table variant="simple" marginTop={8} width="100%">
        <Thead>
          <Tr>
            <Th color={COLORS.main.defaultWhite}>
              {STRINGS.historyTable.scriptName}
            </Th>
            <Th color={COLORS.main.defaultWhite} textAlign="center">
              {STRINGS.historyTable.status}
            </Th>
            <Th color={COLORS.main.defaultWhite} textAlign="center">
              {STRINGS.historyTable.startTime}
            </Th>
            <Th color={COLORS.main.defaultWhite} textAlign="center">
              {STRINGS.historyTable.endTime}
            </Th>
            <Th color={COLORS.main.defaultWhite} textAlign="center">
              {STRINGS.historyTable.maxVus}
            </Th>
            <Tooltip
              label={STRINGS.historyTable.responseTimeTooltip}
              placement="bottom"
              hasArrow
            >
              <Th color={COLORS.main.defaultWhite} textAlign="center">
                {STRINGS.historyTable.responseTime}
              </Th>
            </Tooltip>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {executions.map((execution) => (
            <HistoryTableRow
              key={execution.id}
              execution={execution}
            ></HistoryTableRow>
          ))}
        </Tbody>
      </Table>
    </>
  );
};

export default HistoryTable;
