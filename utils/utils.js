export function mapDocFromFirebase(doc) {
  const data = doc.data();
  const id = doc.id;

  return {
    ...data,
    id,
  };
}

export function formatUsername(user) {
  const { uid, email } = user;
  const parsedEmail = email.substring(0, email.indexOf("@"));

  return {
    uid,
    email: parsedEmail,
  };
}
