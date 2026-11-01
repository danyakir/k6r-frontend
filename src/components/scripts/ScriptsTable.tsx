import { Table, Tbody, Th, Thead, Tooltip, Tr } from "@chakra-ui/react";
import { FC } from "react";

import { COLORS, STRINGS } from "@constants";
import { Script } from "@types";

import ScriptsTableRow from "./ScriptsTableRow";

type Props = {
  scripts: Script[];
};

const ScriptsTable: FC<Props> = ({ scripts }) => {
  return (
    <>
      <Table variant="simple" marginTop={8} width="100%">
        <Thead>
          <Tr>
            <Th color={COLORS.main.defaultWhite}>
              {STRINGS.scriptsTable.scriptName}
            </Th>
            <Th color={COLORS.main.defaultWhite}>
              {STRINGS.scriptsTable.description}
            </Th>
            <Tooltip
              label={STRINGS.scriptsTable.memoryRequiredTooltip}
              placement="bottom"
              hasArrow
            >
              <Th textAlign="center" color={COLORS.main.defaultWhite}>
                {STRINGS.scriptsTable.memoryRequired}
              </Th>
            </Tooltip>
            <Tooltip
              label={STRINGS.scriptsTable.cpuRequiredTooltip}
              placement="bottom"
              hasArrow
            >
              <Th textAlign="center" color={COLORS.main.defaultWhite}>
                {STRINGS.scriptsTable.cpuRequired}
              </Th>
            </Tooltip>
            <Th textAlign="center" color={COLORS.main.defaultWhite}>
              {STRINGS.scriptsTable.lastRun}
            </Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {scripts.map((script: Script) => (
            <ScriptsTableRow key={script.id} script={script}></ScriptsTableRow>
          ))}
        </Tbody>
      </Table>
    </>
  );
};

export default ScriptsTable;
