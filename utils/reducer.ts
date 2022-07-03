import { combineReducers } from "@reduxjs/toolkit";
import productDetailsSlice from "./redux/productDetailsSlice";
import shoppingCartSlice from "./redux/shoppingCartSlice";
import signInSlice from "./redux/signInSlice";
import signUpSlice from "./redux/signUpSlice";
import userInfoSlice from "./redux/userInfoSlice";
import userSlice from "./redux/userSlice";

export const reducer = combineReducers({
    productDetailsSlice: productDetailsSlice,
    shoppingCartSlice: shoppingCartSlice,
    userInfoSlice: userInfoSlice,
    signInSlice: signInSlice,
    signUpSlice: signUpSlice,
    userSlice: userSlice
})