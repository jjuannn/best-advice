import { Flex } from "@chakra-ui/react";
import AddPostForm from "components/Form/Add";
import Spinner from "components/Spinner";
import useAuth from "hooks/useAuth";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function AddPost() {
  const { userValues } = useAuth();
  const { push } = useRouter();

  useEffect(() => {
    if (!userValues) {
      push("/");
    }
  }, []);

  return (
    <Flex alignItems="center" flexDirection="column" height="100%">
      <Flex
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        width="100%"
      >
        {userValues ? <AddPostForm userValues={userValues} /> : <Spinner />}
      </Flex>
    </Flex>
  );
}
