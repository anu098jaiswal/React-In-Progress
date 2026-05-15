import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/counterslice";

//1.create store
//2.wrap app component with provider so that all components can access the store
//3.create Slice
//4.register user in store
export const store=configureStore({
    reducer:{
        counter:counterSlice

    }
})