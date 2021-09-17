import { auth } from "./_index";
import { formatUsername } from "/utils/user";

export const registerWithEmailAndPassword = (email, password) => {
  return auth
    .createUserWithEmailAndPassword(email, password)
    .then((res) => {
      return formatUsername(res.user);
    })
    .catch((err) => {
      console.log(err);
      throw new Error("auth failed");
    });
};

export const loginWithEmailAndPassword = (email, password) => {
  return auth
    .signInWithEmailAndPassword(email, password)
    .then((res) => {
      return formatUsername(res.user);
    })
    .catch((err) => {
      console.log(err);
      throw new Error("auth failed");
    });
};

export const logout = () => {
  return auth.signOut();
};
