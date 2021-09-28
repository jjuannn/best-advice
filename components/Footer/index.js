import { Text, Link, Box } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box textAlign="center">
      <Text as="i">
        Best Advice made by{" "}
        <Link
          color="purple.500"
          fontWeight="600"
          href="https://github.com/jjuannn"
          target="_blank"
          rel="noreferrer"
        >
          Juan Avero
        </Link>
      </Text>
    </Box>
  );
}
