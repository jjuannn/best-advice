import { Box, Flex } from "@chakra-ui/react";
import Footer from "components/Footer";
import Header from "components/Header";

export default function AppLayout({ children }) {
  return (
    <Box as="section" display="flex" flexDirection="column" minHeight="100vh">
      <Header />
      <Flex
        direction="column"
        as="main"
        flex="1"
        paddingY="20px"
        paddingX="5vw"
      >
        {children}
      </Flex>
      <Footer />
    </Box>
  );
}
