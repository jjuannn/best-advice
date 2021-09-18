import { Box, Text, Heading, Badge, Button } from "@chakra-ui/react";
import useAuth from "hooks/useAuth";
import usePosts from "hooks/usePosts";
import Link from "next/link";
import { useEffect } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import router from "next/router";

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
  const {
    fDeletePost,
    deletePostFailure,
    deletePostLoading,
    deletePostSuccess,
  } = usePosts();

  useEffect(() => {
    if (deletePostSuccess) {
      router.push("/list");
    }
  }, [deletePostSuccess]);

  return (
    <>
      <Box
        _hover={{ cursor: "pointer" }}
        bg="purple.400"
        width="100%"
        marginBottom="15px"
        padding="30px"
        borderRadius="md"
        color="white"
      >
        <Box>
          <Text>
            #1 made by {author} - {createdAt} {"  "}
          </Text>
        </Box>
        <Box>
          <Heading>{title}</Heading>
          <Text isTruncated marginTop="10px" color="white">
            {text}
          </Text>
          <Badge colorScheme="purple"># {topic}</Badge>
        </Box>
        <Link href={`/detail/${id}`}>
          <Button marginTop="30px" marginRight="5px" colorScheme="whiteAlpha">
            Detail
          </Button>
        </Link>
        {author_id === userValues?.uid ? (
          <Button
            isLoading={deletePostLoading}
            onClick={() => {
              fDeletePost(id);
            }}
            marginTop="30px"
            colorScheme="red"
            leftIcon={<FaRegTrashAlt />}
          >
            Delete
          </Button>
        ) : (
          ""
        )}
      </Box>
    </>
  );
}
