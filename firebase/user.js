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
      throw new Error(
        "Error while register. The email is probably already being used by another account"
      );
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
      throw new Error(
        "Error while authenticate. Check the credentials or create a new account :)"
      );
    });
};

export const logout = () => {
  return auth.signOut();
};
