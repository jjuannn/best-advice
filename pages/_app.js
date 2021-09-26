import { ChakraProvider } from "@chakra-ui/react";
import AppLayout from "/components/Layout";
import { customTheme } from "/styles/config";
import Head from "/components/Head/index";
import UserContextProvider from "context/user";

function MyApp({ Component, pageProps }) {
  console.log("testing if deploy works correctly");
  return (
    <UserContextProvider>
      <ChakraProvider theme={customTheme}>
        <Head />
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </ChakraProvider>
    </UserContextProvider>
  );
}

export default MyApp;
