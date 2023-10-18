import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducers";
import thunk from 'redux-thunk';



export const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk]


});
