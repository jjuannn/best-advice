import { ChakraProvider } from "@chakra-ui/react";
import AppLayout from "/components/Layout";
import { customTheme } from "/styles/config";
import Head from "/components/Head/index";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={customTheme}>
      <Head />
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </ChakraProvider>
  );
}

export default MyApp;
