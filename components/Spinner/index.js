import { Spinner as ChakraSpinner } from "@chakra-ui/react";

export default function Spinner() {
  return (
    <ChakraSpinner
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.200"
      color="purple.500"
      size="xl"
    />
  );
}
