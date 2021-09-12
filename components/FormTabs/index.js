import {
  Flex,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import RegisterForm from "components/Form/Register";
import LoginForm from "components/Form/Login";

export default function FormTabs() {
  return (
    <Tabs variant="soft-rounded" colorScheme="purple">
      <Flex justifyContent="center">
        <TabList>
          <Tab>Login</Tab>
          <Tab>Register</Tab>
        </TabList>
      </Flex>
      <TabPanels>
        <TabPanel>
          <LoginForm />
        </TabPanel>
        <TabPanel>
          <RegisterForm />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
