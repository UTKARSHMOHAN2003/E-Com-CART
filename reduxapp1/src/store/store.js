import { configureStore } from "@reduxjs/toolkit";
import  userSlice from "./slices/UserSlice.js";

 export const store = configureStore({
  reducer: {
    user: userSlice,
  },
});
