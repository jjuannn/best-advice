import { useReducer } from "react";
import {
  deletePost as deletePostService,
  addPost as addPostService,
} from "/firebase/posts";

const INITIAL_VALUES = {
  addPost: {
    loading: false,
    success: false,
    error: null,
  },
  deletePost: {
    loading: false,
    success: false,
    error: null,
  },
};

function postsReducer(state = INITIAL_VALUES, { type, payload }) {
  switch (type) {
    case "ADD_LOADING":
      return {
        ...state,
        addPost: {
          loading: true,
          success: false,
          error: null,
        },
      };
    case "ADD_SUCCESS":
      return {
        ...state,
        addPost: {
          loading: false,
          success: true,
          error: null,
        },
      };
    case "ADD_FAILURE":
      return {
        ...state,
        addPost: {
          loading: false,
          success: false,
          error: payload,
        },
      };
    case "DELETE_LOADING":
      return {
        ...state,
        deletePost: {
          loading: true,
          success: false,
          error: null,
        },
      };
    case "DELETE_SUCCESS":
      return {
        ...state,
        deletePost: {
          loading: false,
          success: true,
          error: null,
        },
      };
    case "DELETE_FAILURE":
      return {
        ...state,
        deletePost: {
          loading: false,
          success: false,
          error: payload,
        },
      };
    default:
      return state;
  }
}

export default function usePosts() {
  const [state, dispatch] = useReducer(postsReducer, INITIAL_VALUES);
  const { deletePost, addPost } = state;

  const addNewPost = async (data) => {
    dispatch({ type: "ADD_LOADING" });
    try {
      await addPostService(data);
      dispatch({ type: "ADD_SUCCESS" });
    } catch (err) {
      dispatch({ type: "ADD_FAILURE", payload: err });
    }
  };

  const fDeletePost = async (id) => {
    dispatch({ type: "DELETE_LOADING" });
    try {
      await deletePostService(id);
      dispatch({ type: "DELETE_SUCCESS" });
    } catch (err) {
      dispatch({ type: "DELETE_FAILURE", payload: err });
    }
  };

  return {
    addNewPostLoading: addPost.loading,
    addNewPostSuccess: addPost.success,
    addNewPostError: addPost.error,
    deletePostLoading: deletePost.loading,
    deletePostSuccess: deletePost.success,
    deletePostFailure: deletePost.error,
    addNewPost,
    fDeletePost,
  };
}
