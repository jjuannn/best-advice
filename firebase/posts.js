import { firestore } from "./_index";
import { mapDocFromFirebase } from "utils/post";

export function getPostsCollection() {
  return firestore
    .collection("posts")
    .orderBy("createdAt", "desc")
    .get()
    .then(({ docs }) => {
      return docs.map((doc) => mapDocFromFirebase(doc));
    });
}

export function getPostDetail(id) {
  return firestore
    .collection("posts")
    .doc(id)
    .get()
    .then((res) => {
      return res.json();
    });
}

export function addPost({ postValues, uid, user }) {
  return firestore
    .collection("posts")
    .add({
      author: user,
      author_id: uid,
      createdAt: Date.now(),
      text: postValues.text,
      title: postValues.title,
      topic: postValues.topic,
    })
    .catch((err) => {
      throw new Error("Failed while creating a post ");
    });
}
