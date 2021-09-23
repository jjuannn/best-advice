import { Flex } from "@chakra-ui/react";
import { getPostDetail } from "../../firebase/posts";
import { getPostComments } from "../../firebase/comments";
import PostDetail from "components/Post/Detail";
import ErrorMessage from "components/Error";
import CommentSection from "components/Comment/Accordion";

export default function PostDetailPage({ data, error }) {
  return (
    <Flex as="section" width="100%" height="100%" flexDirection="column">
      {data && (
        <>
          <PostDetail {...data.posts} />
          <CommentSection comments={data.comments} />
        </>
      )}
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Flex>
  );
}

export async function getServerSideProps({ query }) {
  try {
    const posts = await getPostDetail(query.id);
    const comments = await getPostComments(query.id);
    return { props: { data: { posts, comments } } };
  } catch (err) {
    return {
      props: { error: err.message },
    };
  }
}
