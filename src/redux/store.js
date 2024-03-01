import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./contactsSlice";


export const store = configureStore({
  reducer: rootReducer,
})

