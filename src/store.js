import { configureStore } from "@reduxjs/toolkit";
import { UserReducer } from "./Users/UserList.slice";

export const store = configureStore({
    reducer: UserReducer,
});