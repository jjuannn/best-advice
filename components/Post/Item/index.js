import { Box, Text, Heading, Badge } from "@chakra-ui/react";

export default function PostItem() {
  return (
    <>
      <Box
        bg="purple.400"
        width="100%"
        marginBottom="15px"
        padding="30px"
        borderRadius="md"
      >
        <Box>
          <Text color="white">
            #1 made by Juan Avero - 5 days ago {"  "}
            <Badge colorScheme="purple">#relationships</Badge>
          </Text>
        </Box>
        <Box>
          <Heading color="white">Lorem ipsum dolor sit amet</Heading>
          <Text isTruncated marginTop="10px" color="white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel
            blandit ex. Duis iaculis tristique elit, et tempus ante semper ac.
            Nam porta, elit a varius auctor, mi nunc consectetur est, in
            fringilla ante ex lobortis ipsum. Morbi egestas ligula nec leo
          </Text>
        </Box>
      </Box>
    </>
  );
}
