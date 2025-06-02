import { createSlice } from "@reduxjs/toolkit";

const playInitial = {
  playstatus: false,
  playData: null,
};

const PlaySlice = createSlice({
  name: "play",
  initialState: playInitial,
  reducers: {
    playStart: (state, acttion) => {
      state.playstatus = true;
      state.playData = acttion.payload;
    },
    playStop: (state, action) => {
      state.playstatus = false;
      state.playData = null;
    },
  },
});

export const { playStart, playStop } = PlaySlice.actions;
export default PlaySlice.reducer;
