import { useReducer } from "react";
import { getPostsCollection, addPost as addPostService } from "/firebase/posts";

const INITIAL_VALUES = {
  posts: {
    loading: false,
    data: null,
    error: null,
  },
  addPost: {
    loading: false,
    success: false,
    error: null,
  },
};

function postsReducer(state = INITIAL_VALUES, { type, payload }) {
  switch (type) {
    case "FETCH_LOADING":
      return {
        ...state,
        posts: {
          loading: true,
          data: null,
          error: null,
        },
      };
    case "FETCH_SUCCESS":
      return {
        ...state,
        posts: {
          loading: false,
          data: payload,
          error: null,
        },
      };
    case "FETCH_FAILURE":
      return {
        ...state,
        posts: {
          loading: false,
          data: null,
          error: payload,
        },
      };
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
    default:
      return state;
  }
}

export default function usePosts() {
  const [state, dispatch] = useReducer(postsReducer, INITIAL_VALUES);
  const { posts, addPost } = state;

  const addNewPost = async (data) => {
    dispatch({ type: "ADD_LOADING" });
    try {
      await addPostService(data);
      dispatch({ type: "ADD_SUCCESS" });
    } catch (err) {
      dispatch({ type: "ADD_FAILURE", payload: err });
    }
  };

  return {
    addNewPostLoading: addPost.loading,
    addNewPostSuccess: addPost.success,
    addNewPostError: addPost.error,
    getPosts,
    addNewPost,
  };
}
