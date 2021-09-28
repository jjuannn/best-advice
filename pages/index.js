import {
  Flex,
  Text,
  Image,
  Heading,
  Box,
  Button,
  Link as ChakraLink,
} from "@chakra-ui/react";
import Link from "next/link";
import PageContainer from "components/PageContainer";

export default function Home() {
  return (
    <PageContainer>
      <Flex
        width={{ sm: "100%", md: "80%" }}
        flexDirection={{ sm: "column", lg: "row" }}
        justifyContent="space-evenly"
        alignItems="center"
      >
        <Box textAlign="center" marginX="10px">
          <Heading color="purple.500" fontSize="50px">
            Welcome to Best Advice!
          </Heading>
          <Text marginTop="10px" fontSize="25px">
            Get in touch with people around the world to give advices to your
            problems!
            <br />
            <Button
              verticalAlign="center"
              colorScheme="purple"
              color="white"
              fontWeight="bold"
              padding="0"
              margin="20px 0px"
            >
              <Link href="/list">
                <ChakraLink
                  _hover={{ textDecoration: "none" }}
                  style={{ display: "block", padding: "1em" }}
                >
                  Get started
                </ChakraLink>
              </Link>
            </Button>
          </Text>
        </Box>
        <Image alt="" width="250px" src="/svg/chat.svg" />
      </Flex>
    </PageContainer>
  );
}
