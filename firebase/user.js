import { auth } from "./_index";
import { formatUsername } from "/utils/utils";

export const registerWithEmailAndPassword = (email, password) => {
  return auth
    .createUserWithEmailAndPassword(email, password)
    .then((res) => {
      return formatUsername(res.user);
    })
    .catch((err) => {
      throw new Error("auth failed");
    });
};

export const logout = () => {
  return auth.signOut();
};
