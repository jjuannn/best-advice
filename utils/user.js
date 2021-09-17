export function formatUsername(user) {
  const { uid, email } = user;
  const parsedEmail = email.substring(0, email.indexOf("@"));

  return {
    uid,
    email: parsedEmail,
  };
}
