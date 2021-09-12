import { useState } from "react";

export default function useForm() {
  const [loginValues, setLoginValues] = useState({ email: "", password: "" });
  const [registerValues, setRegisterValues] = useState({
    email: "",
    password: "",
  });

  const setLoginEmail = (e) => {
    setLoginValues({ ...loginValues, email: e.target.value });
  };

  const setLoginPassword = (e) => {
    setLoginValues({ ...loginValues, password: e.target.value });
  };

  const setRegisterEmail = (e) => {
    setRegisterValues({ ...registerValues, email: e.target.value });
  };

  const setRegisterPassword = (e) => {
    setRegisterValues({ ...registerValues, password: e.target.value });
  };

  return {
    loginValues,
    registerValues,
    setLoginEmail,
    setLoginPassword,
    setRegisterEmail,
    setRegisterPassword,
  };
}
