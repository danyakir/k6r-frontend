import { extendTheme } from "@chakra-ui/react";
import { COLORS } from "@constants";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  fonts: {
    heading: "system-ui, sans-serif",
    body: "system-ui, sans-serif",
  },
  styles: {
    global: {
      body: {
        bg: COLORS.main.defaultBlack,
      },
    },
  },
});

export default theme;
