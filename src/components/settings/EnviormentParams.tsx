import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  IconButton,
  Input,
  Text,
  Flex,
  VStack,
} from "@chakra-ui/react";
import { useFormContext, useFieldArray } from "react-hook-form";
import { MdDelete } from "react-icons/md";

import { EnvParams } from "@types";
import { STRINGS } from "@constants";

const EnviormentParams = () => {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext<{ enviormentParams: EnvParams[] }>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "enviormentParams",
  });

  return (
    <Box width="100%">
      <Text fontSize="md" fontWeight="medium">
        {STRINGS.settings.gitlab.enviormentParams.title}
      </Text>

      <VStack spacing={3} align="strech">
        {fields.map((field, index) => (
          <HStack key={field.id} spacing={3} align="center">
            {/* Name */}
            <Box flex="1">
              <FormControl isInvalid={!!errors.enviormentParams?.[index]?.name}>
                <FormLabel>
                  {STRINGS.settings.gitlab.enviormentParams.name}
                </FormLabel>
                <Input
                  {...register(`enviormentParams.${index}.name`, {
                    required:
                      STRINGS.settings.gitlab.enviormentParams.nameError,
                  })}
                  placeholder={
                    STRINGS.settings.gitlab.enviormentParams.namePlaceholder
                  }
                  defaultValue={field.name}
                />
                <FormErrorMessage>
                  {errors.enviormentParams?.[index]?.name?.message}
                </FormErrorMessage>
              </FormControl>
            </Box>

            {/* Value */}
            <Box flex="1">
              <FormControl
                isInvalid={!!errors.enviormentParams?.[index]?.value}
              >
                <FormLabel>
                  {STRINGS.settings.gitlab.enviormentParams.value}
                </FormLabel>
                <Input
                  {...register(`enviormentParams.${index}.value`, {
                    required:
                      STRINGS.settings.gitlab.enviormentParams.valueError,
                  })}
                  placeholder={
                    STRINGS.settings.gitlab.enviormentParams.valuePlaceholder
                  }
                  defaultValue={field.value}
                />
                <FormErrorMessage>
                  {errors.enviormentParams?.[index]?.value?.message}
                </FormErrorMessage>
              </FormControl>
            </Box>

            {/* Delete */}
            <IconButton
              aria-label="Delete env param"
              icon={<MdDelete />}
              colorScheme="red"
              mt={8}
              onClick={() => remove(index)}
            />
          </HStack>
        ))}
        <Flex justify="flex-end" mt={3}>
          <Button
            onClick={() => append({ name: "", value: "" })}
            colorScheme="green"
          >
            {STRINGS.buttons.addParam}
          </Button>
        </Flex>
      </VStack>
    </Box>
  );
};

export default EnviormentParams;
