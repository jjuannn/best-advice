import {
  Button,
  Heading,
  Box,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Textarea,
} from "@chakra-ui/react";
import useAuth from "hooks/useAuth";
import useForm from "hooks/useForm";
import useComments from "hooks/useComments";
import router from "next/router";
import { useEffect } from "react";
import ErrorMessage from "components/Error";

export default function CommentForm() {
  const { userValues } = useAuth();
  const { uid, user } = userValues;
  const { setCommentText, commentValues, resetCommentValue } = useForm();
  const {
    addComment,
    newCommentFailure,
    newCommentLoading,
    newCommentSuccess,
  } = useComments();
  const { query, push } = router;

  const handleSubmit = (e) => {
    e.preventDefault();
    addComment({ commentValues, user, uid, postId: query.id });
  };

  useEffect(() => {
    if (newCommentSuccess) {
      resetCommentValue();
      push(`/detail/${query.id}`);
    }
  }, [newCommentSuccess]);

  return (
    <Box
      onSubmit={handleSubmit}
      margin="10px"
      as="form"
      width="100%"
      background="purple.background"
      paddingX="50px"
      paddingY="30px"
      borderRadius="12px"
      border="1px"
      borderColor="purple.200"
    >
      <FormControl as="fieldset" marginBottom="12px" isRequired>
        <FormLabel>Comment</FormLabel>
        <Textarea
          value={commentValues.text}
          onChange={setCommentText}
          minHeight="300px"
          maxHeight="305px"
          maxLength="1000"
          border="1px"
          borderColor="gray"
          type="text"
        />
        <FormHelperText>Please be respectful</FormHelperText>
      </FormControl>
      {newCommentFailure && (
        <ErrorMessage>{newCommentFailure.message}</ErrorMessage>
      )}
      <Button
        isDisabled={newCommentLoading}
        isLoading={newCommentLoading}
        type="submit"
        marginTop="10px"
        colorScheme="purple"
      >
        Submit
      </Button>
    </Box>
  );
}
