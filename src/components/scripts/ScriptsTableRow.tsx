import { Td, Tr } from "@chakra-ui/react";
import { FC } from "react";

import { useEditScript } from "@api";
import { Script } from "@types";
import { dateToString } from "@utils";

import EditableCell from "./EditableCell";
import PlayButton from "./PlayButton";

type Props = {
  script: Script;
};

const ScriptsTableRow: FC<Props> = ({ script }) => {
  const editScript = useEditScript();

  const handleEditDescription = (description: string) => {
    editScript.mutate({ id: script.id, diff: { description } });
  };

  const handleEditMemory = (memory: string) => {
    const parsedValue = parseFloat(memory);
    const value = !isNaN(parsedValue) ? parsedValue : 1;

    editScript.mutate({ id: script.id, diff: { memory: value } });
  };

  const handleEditCpu = (cpu: string) => {
    const parsedValue = parseFloat(cpu);
    const value = !isNaN(parsedValue) ? parsedValue : 1;

    editScript.mutate({ id: script.id, diff: { cpu: value } });
  };

  return (
    <Tr key={script.id}>
      <Td maxW="20%" w="20%">
        {script.name}
      </Td>
      <Td cursor="pointer" maxW="25%" w="25%">
        <EditableCell
          value={script.description ?? ""}
          fieldType="text"
          maxChars={400}
          onSaveAction={handleEditDescription}
        />
      </Td>
      <Td maxW="10%" w="10%" cursor="pointer" textAlign="center">
        <EditableCell
          value={String(script.memory)}
          fieldType="number"
          maxChars={2}
          onSaveAction={handleEditMemory}
        />
      </Td>
      <Td textAlign="center" cursor="pointer" maxW="10%" w="10%">
        <EditableCell
          value={String(script.cpu)}
          fieldType="number"
          maxChars={2}
          onSaveAction={handleEditCpu}
        />
      </Td>
      <Td textAlign="center" maxW="15%" w="15%">
        {dateToString(script.lastRun)}
      </Td>
      <Td textAlign="center" maxW="20%" w="20%">
        <PlayButton isRunning={script.isRunning} id={script.id} />
      </Td>
    </Tr>
  );
};

export default ScriptsTableRow;
