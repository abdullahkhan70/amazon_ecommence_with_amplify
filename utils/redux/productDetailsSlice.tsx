import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../store';

interface productDetailsSliceProps {
  quantity: number;
  selectedImageCarouselIndex: number;
}

const initialState: productDetailsSliceProps = {
  quantity: 0,
  selectedImageCarouselIndex: 0,
};

export const productDetailsSlice = createSlice({
  name: 'productDetailsSlice',
  initialState,
  reducers: {
    setIncrementQuantity: (
      state: productDetailsSliceProps,
      action: PayloadAction<number>,
    ) => {
      state.quantity += action.payload;
    },
    setDecrementQuantity: (
      state: productDetailsSliceProps,
      action: PayloadAction<number>,
    ) => {
      state.quantity -= action.payload;
    },
    setSelectedImageCarouselIndex: (
      state: productDetailsSliceProps,
      action: PayloadAction<number>,
    ) => {
      state.selectedImageCarouselIndex = action.payload;
    },
  },
});

export const {
  setDecrementQuantity,
  setIncrementQuantity,
  setSelectedImageCarouselIndex,
} = productDetailsSlice.actions;

export const selectQuantity = (state: RootState) =>
  state.productDetailsSlice.quantity;

export const selectSelectedImageCarouselIndex = (state: RootState) =>
  state.productDetailsSlice.selectedImageCarouselIndex;

export default productDetailsSlice.reducer;
