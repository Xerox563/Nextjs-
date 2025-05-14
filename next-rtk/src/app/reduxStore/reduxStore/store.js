"use client"
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../reduxStore/features/Counter/counterSlice.js"
import themeReducer from "../reduxStore/features/Theme/themeSlice.js";
export const store = configureStore({
    reducer:{
        // Here we will add the reducer (like counter one)
        counter: counterReducer,
        theme :themeReducer
    }
}) 