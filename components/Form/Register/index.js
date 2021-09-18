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
import ErrorMessage from "components/Error";

export default function RegisterForm() {
  const { registerValues, setRegisterEmail, setRegisterPassword } = useForm();
  const { email, password } = registerValues;
  const { register, userValues } = useAuth();

  const handleRegister = (e) => {
    e.preventDefault();
    register(registerValues);
  };

  return (
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
          value={email}
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
          value={password}
          onChange={setRegisterPassword}
          type="password"
        />
        <FormHelperText>
          The password should have at least 8 characters
        </FormHelperText>
      </FormControl>
      {userValues?.error && (
        <ErrorMessage>{userValues.error.message}</ErrorMessage>
      )}
      <Button type="submit" marginTop="10px" colorScheme="purple">
        Register <FiLogIn style={{ marginLeft: "10px" }} />
      </Button>
    </Box>
  );
}
