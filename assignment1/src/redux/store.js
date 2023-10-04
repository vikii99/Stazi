import { configureStore } from "@reduxjs/toolkit";
import searchItemSlice from "./features/searchItemSlice.js";

export const store = configureStore({
  reducer: {
    searchItem: searchItemSlice,
  },
});
