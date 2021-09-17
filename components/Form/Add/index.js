import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";
import ErrorMessage from "components/Error";
import useAuth from "hooks/useAuth";
import useForm from "hooks/useForm";
import usePosts from "hooks/usePosts";
import router from "next/router";
import { FiLogIn } from "react-icons/fi";

export default function AddPostForm({ userValues }) {
  const { postValues, setPostTitle, setPostTopic, setPostText } = useForm();
  const { addNewPost, addNewPostLoading, addNewPostError, addNewPostSuccess } = usePosts();
  const { title, text, topic } = postValues;
  const { user, uid } = userValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewPost({ postValues, user, uid });
  };

  if (addNewPostSuccess) {
    router.push("/list");
  }

  return (
    <Box
      onSubmit={handleSubmit}
      margin="10px"
      as="form"
      maxWidth="600px"
      width="100%"
      paddingX="50px"
      paddingY="30px"
      borderRadius="12px"
      border="1px"
      borderColor="purple.200"
    >
      <Heading marginBottom="10px">Create</Heading>
      <FormControl as="fieldset" marginBottom="12px" isRequired>
        <FormLabel>Title</FormLabel>
        <Input
          value={title}
          onChange={setPostTitle}
          maxLength="60"
          border="1px"
          borderColor="gray"
          type="text"
        />
      </FormControl>
      <FormControl as="fieldset" marginBottom="12px" isRequired>
        <FormLabel>Text</FormLabel>
        <Input
          value={text}
          onChange={setPostText}
          maxLength="300"
          border="1px"
          borderColor="gray"
          type="text"
        />
      </FormControl>
      <FormControl as="fieldset" marginBottom="12px" isRequired>
        <FormLabel>Topic</FormLabel>
        <Input
          value={topic}
          onChange={setPostTopic}
          maxLength="15"
          border="1px"
          borderColor="gray"
          type="text"
        />
      </FormControl>
      {addNewPostError && (
        <ErrorMessage>{addNewPostError.message}</ErrorMessage>
      )}
      <Button
        disabled={addNewPostLoading}
        isLoading={addNewPostLoading}
        type="submit"
        marginTop="10px"
        colorScheme="purple"
      >
        Submit <FiLogIn style={{ marginLeft: "10px" }} />
      </Button>
    </Box>
  );
}
