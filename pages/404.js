import { Flex, Text, Link } from "@chakra-ui/react";

export default function Error404Page() {
  return (
    <Flex
      margin="auto"
      justifyContent="center"
      alignItems="center"
      direction="column"
    >
      <Text>
        Oops, looks like the content that you are trying to view does not exist!
        :(
      </Text>
      <Text>
        Looking for help? We can{" "}
        <span style={{ color: "purple" }}>
          <Link
            target="_blank"
            rel="noreferrer"
            href="https://github.com/jjuannn/best-advice/issues"
          >
            help you
          </Link>
        </span>
      </Text>
    </Flex>
  );
}
