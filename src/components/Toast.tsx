import { createStandaloneToast } from "@chakra-ui/react";

const { toast } = createStandaloneToast();

export const showToast = (message: string, status: "success" | "error") => {
  toast({
    title: status,
    description: message,
    status: status,
    duration: 4000,
    isClosable: true,
    position: "top-right",
  });
};
