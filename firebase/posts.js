import { firestore } from "./_index";
import { mapDocFromFirebase } from "utils/post";

export function getPostsCollection() {
  return firestore
    .collection("posts")
    .orderBy("createdAt", "desc")
    .get()
    .then(({ docs }) => {
      return docs.map((doc) => mapDocFromFirebase(doc));
    })
    .catch((err) => {
      throw new Error("Failed while fetching posts");
    });
}

export function getPostDetail(id) {
  return firestore
    .collection("posts")
    .doc(id)
    .get()
    .then((res) => {
      return mapDocFromFirebase(res);
    })
    .catch((err) => {
      throw new Error("Failed while fetching post detail");
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

export function deletePost(id) {
  return firestore
    .collection("posts")
    .doc(id)
    .delete()
    .catch((err) => {
      throw new Error("Failed white deleting a post");
    });
}
