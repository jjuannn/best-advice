import { Flex } from "@chakra-ui/react";
import FormTabs from "components/FormTabs";

export default function Auth() {
  return (
    <Flex alignItems="center" flexDirection="column" height="100%">
      <Flex direction={{ sm: "column", lg: "row" }}>
        <FormTabs />
      </Flex>
    </Flex>
  );
}
