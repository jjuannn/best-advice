import { Heading, Flex, Box, Button, Text } from "@chakra-ui/react";
import PostItem from "components/Post/Item";
import Link from "next/link";
import useAuth from "hooks/useAuth";
import ErrorMessage from "components/Error";
import { getPostsCollection } from "../firebase/posts";

export default function List({ posts, error }) {
  const { userValues } = useAuth();

  return (
    <Flex as="section" height="100%" flexDirection="column">
      <Box display="flex" justifyContent="space-between">
        <Heading color="purple.500" fontSize="50px" marginBottom="30px">
          Explore
        </Heading>
        <Link href={userValues?.user ? "/add" : ""}>
          <Button disabled={!userValues?.user} colorScheme="purple">
            Create
          </Button>
        </Link>
      </Box>
      <Flex flexDirection="column" alignItems="center">
        {posts &&
          (posts.length === 0 ? (
            <Text>
              Oops, this looks empty, but you can start creating a new post!
            </Text>
          ) : (
            posts.map((post) => {
              return <PostItem {...post} key={post.id} />;
            })
          ))}
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </Flex>
    </Flex>
  );
}

export async function getServerSideProps() {
  try {
    const posts = await getPostsCollection();
    return {
      props: { posts },
    };
  } catch (err) {
    return {
      props: { error: err.message },
    };
  }
}
