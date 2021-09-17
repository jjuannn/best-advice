import { useState } from "react";

export default function useForm() {
  const [loginValues, setLoginValues] = useState({ email: "", password: "" });
  const [registerValues, setRegisterValues] = useState({
    email: "",
    password: "",
  });
  const [postValues, setPostValues] = useState({
    title: "",
    text: "",
    topic: "",
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

  const setPostTitle = (e) => {
    setPostValues({ ...postValues, title: e.target.value });
  };

  const setPostText = (e) => {
    setPostValues({ ...postValues, text: e.target.value });
  };

  const setPostTopic = (e) => {
    setPostValues({ ...postValues, topic: e.target.value });
  };

  return {
    loginValues,
    setLoginEmail,
    setLoginPassword,
    registerValues,
    setRegisterEmail,
    setRegisterPassword,
    postValues,
    setPostTitle,
    setPostText,
    setPostTopic,
  };
}
