import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./authSlice";
import PlaySlice from "./playSlice";

const store = configureStore({
  reducer: {
    auth: AuthSlice,
    play: PlaySlice,
  },
});
export default store;
