import { Text } from "@chakra-ui/react";

export default function ErrorMessage({ children }) {
  return (
    <Text color="red" fontSize="16px">
      {children}
    </Text>
  );
}
