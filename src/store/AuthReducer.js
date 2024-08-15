import { createSlice } from "@reduxjs/toolkit";
import produce from "immer";

const initialState = {
  login: false,
  username: null
};

const getAuthFromLocal = () => {
  const localData = localStorage.getItem("token");
  return localData ? JSON.parse(localData) : initialState;
};

const AuthSlice = createSlice({
  name: "auth",
  initialState: getAuthFromLocal(),
  reducers: {
    login: (state, action) => {
      state.login = true;
      state.username = action.payload;
      localStorage.setItem(
        "token",
        JSON.stringify({ login: true, username: action.payload })
      );
    },
    logout: (state, action) => {
      state.login = false;
      state.username = null;
      localStorage.removeItem("token");
    }
  }
});

export const { login, logout } = AuthSlice.actions;

export default AuthSlice.reducer;
