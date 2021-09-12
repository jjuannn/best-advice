import { createContext, useReducer } from "react";

export const userContext = createContext({});

export default function UserContextProvider({ children }) {
  const [userValues, userDispatch] = useReducer(userReducer, null);

  return (
    <userContext.Provider value={{ userValues, userDispatch }}>
      {children}
    </userContext.Provider>
  );
}

export function userReducer(state = null, { type, payload }) {
  switch (type) {
    case "USER_AUTH":
      const { email, uid } = payload;
      return { ...state, user: email, uid };
    case "USER_LOGOUT":
      return null;
    default:
      return state;
  }
}
