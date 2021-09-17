export function mapDocFromFirebase(doc) {
  const data = doc.data();
  const id = doc.id;

  const date = new Date(Number(data.createdAt));
  const createdAt = new Date(date.getTime() - date.getTimezoneOffset() * 60000)
    .toISOString()
    .split("T")[0];

  return {
    ...data,
    id,
    createdAt,
  };
}

export function createPost(data) {}
