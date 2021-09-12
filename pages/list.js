import { Heading, Flex, Box, Button } from "@chakra-ui/react";
import PostItem from "components/Post/Item";

export default function List() {
  return (
    <Flex as="section" height="100%" flexDirection="column">
      <Box display="flex" justifyContent="space-between">
        <Heading color="purple.500" fontSize="50px" marginBottom="30px">
          Explore
        </Heading>
        <Button colorScheme="purple">Create</Button>
      </Box>
      <Flex flexDirection="column">
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
      </Flex>
    </Flex>
  );
}
