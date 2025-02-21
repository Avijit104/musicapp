import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loginStatus: false,
  userdata: null,
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.loginStatus = true;
      state.userdata = action.payload;
    },
    logout: (state, action) => {
      state.loginStatus = false;
      state.userdata = null;
    },
  },
});

export const { login, logout } = AuthSlice.actions;
export default AuthSlice.reducer;
