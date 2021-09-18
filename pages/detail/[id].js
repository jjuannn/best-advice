import { Flex } from "@chakra-ui/react";
import { getPostDetail } from "../../firebase/posts";
import PostDetail from "components/Post/Detail";
import ErrorMessage from "components/Error";

export default function PostDetailPage({ data, error }) {
  return (
    <Flex as="section" width="100%" height="100%">
      {data && <PostDetail {...data} />}
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Flex>
  );
}

export async function getServerSideProps({ query }) {
  try {
    const data = await getPostDetail(query.id);
    return { props: { data } };
  } catch (err) {
    return {
      props: { error: err.message },
    };
  }
}
