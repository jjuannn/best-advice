import { Box, Text, Heading, Badge } from "@chakra-ui/react";
import useAuth from "hooks/useAuth";

export default function PostItem({
  author,
  id,
  text,
  title,
  topic,
  createdAt,
  author_id,
}) {
  const { userValues } = useAuth();

  return (
    <>
      <Box
        bg="purple.400"
        width="100%"
        marginBottom="15px"
        padding="30px"
        borderRadius="md"
      >
        <Box>
          <Text color="white">
            #1 made by {author} - {createdAt} {"  "}
          </Text>
        </Box>
        <Box>
          <Heading color="white">{title}</Heading>
          <Text isTruncated marginTop="10px" color="white">
            {text}
          </Text>
          <Badge colorScheme="purple"># {topic}</Badge>
        </Box>
        {author_id === userValues?.uid
          ? "TIENEN LA MISMA ID"
          : "NO TIENEN LA MISMA ID "}
      </Box>
    </>
  );
}
