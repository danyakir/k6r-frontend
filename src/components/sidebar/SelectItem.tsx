import { Box, Select } from "@chakra-ui/react";
import { FC } from "react";

import { useCurrentGroup } from "@contexts";

const SelectItem: FC = () => {
  const { groups, currentGroup, setCurrentGroup } = useCurrentGroup();

  return (
    <Box>
      <Select
        defaultValue={currentGroup}
        marginInline="auto"
        mt={4}
        width="90%"
        size="md"
        cursor="pointer"
        onChange={(option) => {
          setCurrentGroup(option.target.value);
        }}
      >
        {groups.map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </Select>
    </Box>
  );
};

export default SelectItem;
