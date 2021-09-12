import { useContext } from "react";
import { userContext } from "context/user";
import {
  registerWithEmailAndPassword,
  loginWithEmailAndPassword,
  logout as logoutService,
} from "/firebase/user.js";
import { useRouter } from "next/router";

export default function useAuth() {
  const { userValues, userDispatch } = useContext(userContext);
  const router = useRouter();

  const register = async ({ email, password }) => {
    try {
      const data = await registerWithEmailAndPassword(email, password);
      userDispatch({ type: "USER_AUTH", payload: data });
      router.push("/");
    } catch (err) {}
  };

  const login = async ({ email, password }) => {
    try {
      const data = await loginWithEmailAndPassword(email, password);
      userDispatch({ type: "USER_AUTH", payload: data });
      router.push("/");
    } catch (err) {}
  };

  const logout = async () => {
    await logoutService();
    userDispatch({ type: "USER_LOGOUT" });
  };

  return {
    register,
    logout,
    userValues,
    login,
  };
}
