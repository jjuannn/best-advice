import { Box, Flex } from "@chakra-ui/react";

export default function AppLayout({ children }) {
  return (
    <Box as="section" display="flex" flexDirection="column" height="100vh">
      {/* head */}
      <Flex direction="column" as="main" flex="1">
        {children}
      </Flex>
      {/* footer */}
    </Box>
  );
}
