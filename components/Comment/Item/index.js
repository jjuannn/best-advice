import { Flex, Box, Text, Button } from "@chakra-ui/react";
import useAuth from "hooks/useAuth";
import useComments from "hooks/useComments";
import { useEffect } from "react";
import router from "next/router";
import ErrorMessage from "components/Error";

export default function CommentItem({
  author,
  author_id,
  createdAt,
  text,
  id,
  post_id,
}) {
  const { userValues } = useAuth();
  const {
    deleteComment,
    commentDeleteFailure,
    commentDeleteLoading,
    commentDeleteSuccess,
  } = useComments();

  useEffect(() => {
    if (commentDeleteSuccess) {
      router.push(`/detail/${post_id}`);
    }
  }, [commentDeleteSuccess]);

  return (
    <Flex
      flexDirection="column"
      border="1px"
      borderColor="purple.200"
      borderRadius="md"
      padding="20px"
      marginBottom="20px"
    >
      <Box marginBottom="20px">
        <Text>
          {createdAt} - {author} said:
        </Text>
      </Box>
      <Box>{text}</Box>
      {commentDeleteFailure && (
        <ErrorMessage>{commentDeleteFailure.message}</ErrorMessage>
      )}
      {userValues?.uid === author_id && (
        <Box marginTop="20px" width="fit-content">
          <Button
            isDisabled={commentDeleteLoading}
            isLoading={commentDeleteLoading}
            onClick={() => {
              deleteComment(id);
            }}
            colorScheme="red"
          >
            Delete
          </Button>
        </Box>
      )}
    </Flex>
  );
}
