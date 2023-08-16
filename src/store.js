import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authreducer";
import thunk from 'redux-thunk';



export const store = configureStore({
  reducer: authReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk]


});
