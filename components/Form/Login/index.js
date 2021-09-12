import {
  Button,
  Heading,
  Box,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
} from "@chakra-ui/react";
import useForm from "hooks/useForm";
import useAuth from "hooks/useAuth";
import { FiLogIn } from "react-icons/fi";

export default function LoginForm() {
  const { loginValues, setLoginEmail, setLoginPassword } = useForm();

  const { login } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    login(loginValues);
  };

  return (
    <Box
      onSubmit={handleLogin}
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
  );
}
