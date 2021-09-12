import { firestore } from "./_index";
import { mapDocFromFirebase } from "utils/utils";

export function getPostsCollection() {
  return firestore
    .collection("posts")
    .get()
    .then(({ docs }) => {
      const posts = docs.map((doc) => mapDocFromFirebase(doc));
    });
}
