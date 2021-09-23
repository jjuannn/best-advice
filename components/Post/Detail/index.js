import { Flex, Box, Text, Heading, Badge, Button } from "@chakra-ui/react";
import Link from "next/link";

export default function PostDetail({ author, createdAt, text, title, topic }) {
  return (
    <Flex
      position="relative"
      color="white"
      padding="30px"
      borderRadius="md"
      bg="purple.400"
      flexDirection="column"
      height="100%"
      width="100%"
    >
      <Flex flexDirection="column" marginBottom="20px">
        <Heading color="white">{title}</Heading>
        <Text>
          {author} - {createdAt}
        </Text>
      </Flex>
      <Box>
        <Text>{text}</Text>
      </Box>
      <Box marginTop="30px">
        <Badge colorScheme="purple"># {topic}</Badge>
      </Box>
      <Box marginTop="30px">
        <Link href="/list">
          <Button colorScheme="whiteAlpha">Back to list</Button>
        </Link>
      </Box>
    </Flex>
  );
}
