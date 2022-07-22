import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../lib/theme";
import Navbar from "../components/navbar/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
