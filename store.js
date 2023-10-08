import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./src/features/userSlice";
import wasteReducer from "./src/features/wasteSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    waste: wasteReducer,
  },
});
