import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./slices/postSlice";

export const store = configureStore({
  reducer: {
    postReducer
  },
//  middleware: (getDefaultMiddleware) =>
//    getDefaultMiddleware().concat(homeApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;