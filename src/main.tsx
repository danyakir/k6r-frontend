import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import { CurrentGroupProvider } from "@contexts";

import App from "./App.tsx";
import theme from "theme.ts";
import "./fonts.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <CurrentGroupProvider>
        <ColorModeScript initialColorMode="dark" />
        <ChakraProvider theme={theme}>
          <App />
        </ChakraProvider>
      </CurrentGroupProvider>
    </QueryClientProvider>
  </StrictMode>
);
