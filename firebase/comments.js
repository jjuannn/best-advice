import { firestore } from "./_index";
import { mapDocFromFirebase } from "utils/comment";

export function addComment({ commentValues, user, uid, postId }) {
  return firestore
    .collection("comments")
    .add({
      author: user,
      author_id: uid,
      post_id: postId,
      text: commentValues.text,
      createdAt: Date.now(),
    })
    .catch((err) => {
      throw new Error("Failed while publishing the comment");
    });
}

export function getPostComments(postId) {
  return firestore
    .collection("comments")
    .where("post_id", "==", postId)
    .get()
    .then(({ docs }) => {
      return docs.map((doc) => mapDocFromFirebase(doc));
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      throw new Error("Failed while getting comments");
    });
}

export function deleteComment(postId) {
  return firestore
    .collection("comments")
    .doc(postId)
    .delete()
    .then((r) => {
      console.log("success");
    })
    .catch((err) => {
      throw new Error("Failed while deleting comment");
    });
}
