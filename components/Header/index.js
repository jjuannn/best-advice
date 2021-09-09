import { Box, Flex, Button } from "@chakra-ui/react";
import Link from "next/link";

export default function Header() {
  return (
    <Flex
      flexDirection="row"
      justifyContent="space-between"
      padding="3"
      bg="purple.200"
    >
      <Box>
        <Link href="/">
          <Button
            verticalAlign="center"
            colorScheme="purple"
            color="white"
            fontWeight="bold"
          >
            Best Advice
          </Button>
        </Link>
      </Box>
      <Box>
        <Link href="/list">
          <Button
            padding="7px 10px"
            borderRadius="12px"
            _hover={{ cursor: "pointer" }}
          >
            List
          </Button>
        </Link>
      </Box>
    </Flex>
  );
}
