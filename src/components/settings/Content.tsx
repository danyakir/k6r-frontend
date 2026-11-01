import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FC, useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";

import { useEditSettings } from "@api";
import { COLORS, STRINGS } from "@constants";
import { Settings } from "@types";

import EnviormentParams from "./EnviormentParams";

type Props = {
  settings: Settings;
};

const Content: FC<Props> = ({ settings }: Props) => {
  const methods = useForm<Settings>({
    mode: "all",
  });

  useEffect(() => {
    methods.reset({
      gitlabUrl: settings.gitlabUrl || "",
      gitlabToken: settings.gitlabToken || "",
      scriptsRoute: settings.scriptsRoute || "",
      branchName: settings.branchName || "",
      ocUrl: settings.ocUrl || "",
      ocToken: settings.ocToken || "",
      ocNamespace: settings.ocNamespace || "",
      prometheusUrl: settings.prometheusUrl || "",
      enviormentParams: settings.enviormentParams ?? [],
    });
  }, [settings, methods]);
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = methods;

  const editSettings = useEditSettings();

  const onFormSubmit = (data: Settings) => editSettings.mutate(data);

  return (
    <>
      <HStack justify="space-between" align="flex-start" mr={8}>
        <FormProvider {...methods}>
          <Box width="50%" p={2}>
            <Text fontSize="xl" fontWeight="bold">
              {STRINGS.settings.openShift.title}
            </Text>
            <VStack spacing={4} mt={2} ml={4}>
              <FormControl isInvalid={!!errors.ocUrl}>
                <FormLabel>{STRINGS.settings.openShift.url.title}</FormLabel>
                <Input
                  {...register("ocUrl", {
                    required: STRINGS.settings.openShift.url.error,
                  })}
                  placeholder={STRINGS.settings.openShift.url.placeholder}
                />
                <FormErrorMessage>{errors.ocUrl?.message}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.ocToken}>
                <FormLabel>{STRINGS.settings.openShift.token.title}</FormLabel>
                <Input
                  type="password"
                  {...register("ocToken", {
                    required: STRINGS.settings.openShift.token.error,
                  })}
                />
                <FormErrorMessage>{errors.ocToken?.message}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.ocNamespace}>
                <FormLabel>
                  {STRINGS.settings.openShift.namespace.title}
                </FormLabel>
                <Input
                  {...register("ocNamespace", {
                    required: STRINGS.settings.openShift.namespace.error,
                  })}
                  placeholder={STRINGS.settings.openShift.namespace.placeholder}
                />
                <FormErrorMessage>
                  {errors.ocNamespace?.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel>
                  {STRINGS.settings.openShift.prometheusUrl.title}
                </FormLabel>
                <Input
                  {...register("prometheusUrl")}
                  placeholder={
                    STRINGS.settings.openShift.prometheusUrl.placeholder
                  }
                />
              </FormControl>
              <EnviormentParams />
            </VStack>
          </Box>

          <Box width="50%" p={2}>
            <Text fontSize="xl" fontWeight="bold">
              {STRINGS.settings.gitlab.title}
            </Text>
            <VStack spacing={4} mt={2} ml={4}>
              <FormControl isInvalid={!!errors.gitlabUrl}>
                <FormLabel>{STRINGS.settings.gitlab.url.title}</FormLabel>
                <Input
                  {...register("gitlabUrl", {
                    required: STRINGS.settings.gitlab.url.error,
                  })}
                  placeholder={STRINGS.settings.gitlab.url.placeholder}
                />
                <FormErrorMessage>{errors.gitlabUrl?.message}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.gitlabToken}>
                <FormLabel>{STRINGS.settings.gitlab.token.title}</FormLabel>
                <Input
                  type="password"
                  {...register("gitlabToken", {
                    required: STRINGS.settings.gitlab.token.error,
                  })}
                />
                <FormErrorMessage>
                  {errors.gitlabToken?.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel>
                  {STRINGS.settings.gitlab.scriptsRoute.title}
                </FormLabel>
                <Input
                  {...register("scriptsRoute")}
                  placeholder={STRINGS.settings.gitlab.scriptsRoute.placeholder}
                />
              </FormControl>
              <FormControl>
                <FormLabel>
                  {STRINGS.settings.gitlab.branchName.title}
                </FormLabel>
                <Input
                  {...register("branchName")}
                  placeholder={STRINGS.settings.gitlab.branchName.title}
                />
              </FormControl>
            </VStack>
            <HStack justify="flex-end" pt={4}>
              <Button
                onClick={handleSubmit(onFormSubmit)}
                bgColor={COLORS.main.defaultPurple}
                isDisabled={!isDirty}
              >
                {STRINGS.buttons.save}
              </Button>
            </HStack>
          </Box>
        </FormProvider>
      </HStack>
    </>
  );
};

export default Content;
