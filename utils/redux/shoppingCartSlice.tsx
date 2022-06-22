import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../store';

interface shoppingCartSliceProps {
  shoppingCartGiftCheckbox: Boolean;
}

const initialState: shoppingCartSliceProps = {
  shoppingCartGiftCheckbox: false,
};

export const shoppingCartSlice = createSlice({
  name: 'shoppingCartSlice',
  initialState,
  reducers: {
    setShoppingGifts: (
      state: shoppingCartSliceProps,
      action: PayloadAction<Boolean>,
    ) => {
      state.shoppingCartGiftCheckbox = action.payload;
    },
  },
});

export const {setShoppingGifts} = shoppingCartSlice.actions;

export const selectShoppingCartGiftCheckbox = (state: RootState) =>
  state.shoppingCartSlice.shoppingCartGiftCheckbox;
export default shoppingCartSlice.reducer;
