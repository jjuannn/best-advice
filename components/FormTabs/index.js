import {
  Flex,
  Button,
  Heading,
  Box,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import { authWithEmailAndPassword } from "/firebase/user";
import { FiLogIn } from "react-icons/fi";
import useForm from "hooks/useForm";
import useAuth from "hooks/useAuth";

export default function FormTabs() {
  const {
    loginValues,
    registerValues,
    setLoginEmail,
    setLoginPassword,
    setRegisterEmail,
    setRegisterPassword,
  } = useForm();

  const { logout, register, userValues } = useAuth();

  const handleRegister = (e) => {
    e.preventDefault();
    register(registerValues);
  };

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
          <Box
            margin="10px"
            as="form"
            maxWidth="440px"
            background="purple.background"
            paddingX="50px"
            paddingY="30px"
            borderRadius="12px"
            border="1px"
            borderColor="purple.200"
          >
            <Heading marginBottom="10px">Login</Heading>
            <FormControl as="fieldset" marginBottom="12px" isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                maxLength="30"
                border="1px"
                borderColor="gray"
                value={loginValues.email}
                onChange={setLoginEmail}
                type="email"
              />
            </FormControl>
            <FormControl as="fieldset" marginBottom="12px" isRequired>
              <FormLabel>Password</FormLabel>
              <Input
                minLength="8"
                maxLength="30"
                border="1px"
                borderColor="gray"
                value={loginValues.password}
                onChange={setLoginPassword}
                type="password"
              />
              <FormHelperText>
                Please remember your credentials! Be careful
              </FormHelperText>
            </FormControl>
            <Button type="submit" marginTop="10px" colorScheme="purple">
              Login <FiLogIn style={{ marginLeft: "10px" }} />
            </Button>
          </Box>
        </TabPanel>
        <TabPanel>
          <Box
            maxWidth="440px"
            onSubmit={handleRegister}
            margin="10px"
            as="form"
            background="purple.background"
            paddingX="50px"
            paddingY="30px"
            borderRadius="12px"
            border="1px"
            borderColor="purple.200"
          >
            <Heading marginBottom="10px">Register</Heading>
            <FormControl as="fieldset" marginBottom="12px" isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                maxLength="30"
                border="1px"
                borderColor="gray"
                value={registerValues.email}
                onChange={setRegisterEmail}
                type="email"
              />
            </FormControl>
            <FormControl as="fieldset" marginBottom="12px" isRequired>
              <FormLabel>Password</FormLabel>
              <Input
                minLength="8"
                maxLength="30"
                border="1px"
                borderColor="gray"
                value={registerValues.password}
                onChange={setRegisterPassword}
                type="password"
              />
              <FormHelperText>
                The password should have at least 8 characters
              </FormHelperText>
            </FormControl>
            <Button type="submit" marginTop="10px" colorScheme="purple">
              Register <FiLogIn style={{ marginLeft: "10px" }} />
            </Button>
          </Box>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
