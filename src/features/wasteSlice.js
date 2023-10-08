import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wastes: [],
};

export const wasteSlice = createSlice({
  name: "waste",
  initialState,
  reducers: {
    getAllWastes: (state, action) => {
      state.wastes = action.payload;
    },
  },
});

export default wasteSlice.reducer;

export const { getAllWastes } = wasteSlice.actions;
