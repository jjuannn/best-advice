import { useReducer } from "react";
import {
  addComment as addCommentService,
  deleteComment as deleteCommentService,
} from "/firebase/comments";

const INITIAL_VALUES = {
  newComment: {
    loading: false,
    success: false,
    error: null,
  },
  commentDelete: {
    loading: false,
    success: false,
    error: null,
  },
};

function commentsReducer(state = INITIAL_VALUES, { type, payload }) {
  switch (type) {
    case "NEW_COMMENT_LOADING":
      return {
        ...state,
        newComment: { loading: true, success: false, error: null },
      };
    case "NEW_COMMENT_SUCCESS":
      return {
        ...state,
        newComment: { loading: false, success: true, error: null },
      };
    case "NEW_COMMENT_FAILURE":
      return {
        ...state,
        newComment: { loading: false, success: false, error: payload },
      };
    case "DELETE_COMMENT_LOADING":
      return {
        ...state,
        commentDelete: {
          loading: true,
          success: false,
          error: null,
        },
      };
    case "DELETE_COMMENT_SUCCESS":
      return {
        ...state,
        commentDelete: {
          loading: false,
          success: true,
          error: null,
        },
      };
    case "DELETE_COMMENT_FAILURE":
      return {
        ...state,
        commentDelete: {
          loading: false,
          success: false,
          error: payload,
        },
      };
    default:
      return state;
  }
}

export default function useComments() {
  const [state, dispatch] = useReducer(commentsReducer, INITIAL_VALUES);
  const { newComment, commentDelete } = state;

  const addComment = async (data) => {
    dispatch({ type: "NEW_COMMENT_LOADING" });
    try {
      await addCommentService(data);
      dispatch({ type: "NEW_COMMENT_SUCCESS" });
    } catch (err) {
      dispatch({ type: "NEW_COMMENT_FAILURE", payload: err });
    }
  };

  const deleteComment = async (postId) => {
    dispatch({ type: "DELETE_COMMENT_LOADING" });
    try {
      await deleteCommentService(postId);
      dispatch({ type: "DELETE_COMMENT_SUCCESS" });
    } catch (err) {
      console.log(err);
      dispatch({ type: "DELETE_COMMENT_FAILURE", payload: err });
    }
  };

  return {
    newCommentLoading: newComment.loading,
    newCommentSuccess: newComment.success,
    newCommentFailure: newComment.error,
    commentDeleteLoading: commentDelete.loading,
    commentDeleteSuccess: commentDelete.success,
    commentDeleteFailure: commentDelete.error,
    addComment,
    deleteComment,
  };
}
