import {configureStore, Store} from '@reduxjs/toolkit';
import productDetailsSlice from './redux/productDetailsSlice';
import shoppingCartSlice from './redux/shoppingCartSlice';
import userInfoSlice from './redux/userInfoSlice';

export const store = configureStore({
  reducer: {
    productDetailsSlice: productDetailsSlice,
    shoppingCartSlice: shoppingCartSlice,
    userInfoSlice: userInfoSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
