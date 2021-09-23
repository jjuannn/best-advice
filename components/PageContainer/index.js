import { Flex } from "@chakra-ui/react";

export default function PageContainer({ children }) {
  return (
    <Flex
      margin="auto"
      as="section"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100%"
    >
      {children}
    </Flex>
  );
}
