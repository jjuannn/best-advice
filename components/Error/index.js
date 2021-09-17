import { Text } from "@chakra-ui/react";

export default function ErrorMessage({ children }) {
  return (
    <Text color="red" fontSize="24px">
      {children}
    </Text>
  );
}
