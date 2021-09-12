import { Box, Flex, Button } from "@chakra-ui/react";
import Link from "next/link";
import useAuth from "hooks/useAuth";

export default function Header() {
  const { userValues, logout } = useAuth();

  return (
    <Flex
      flexDirection="row"
      justifyContent="space-between"
      padding="3"
      bg="purple.200"
    >
      <Box>
        <Link href="/">
          <Button
            verticalAlign="center"
            colorScheme="purple"
            color="white"
            fontWeight="bold"
          >
            Best Advice
          </Button>
        </Link>
      </Box>
      <Box>
        {userValues ? (
          <>
            <Button
              colorScheme="purple"
              color="white"
              marginRight="10px"
              padding="7px 10px"
              borderRadius="12px"
            >
              {userValues.user}
            </Button>
            <Button
              onClick={logout}
              marginRight="10px"
              padding="7px 10px"
              borderRadius="12px"
              _hover={{ cursor: "pointer" }}
            >
              Logout
            </Button>
          </>
        ) : (
          <Link href="/auth">
            <Button
              marginRight="10px"
              padding="7px 10px"
              borderRadius="12px"
              _hover={{ cursor: "pointer" }}
            >
              Auth
            </Button>
          </Link>
        )}
        <Link href="/list">
          <Button
            padding="7px 10px"
            borderRadius="12px"
            _hover={{ cursor: "pointer" }}
          >
            List
          </Button>
        </Link>
      </Box>
    </Flex>
  );
}
