import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../store';

interface productDetailsSliceProps {
  quantity: number;
  selectedImageCarouselIndex: number;
  products: any;
  productId: string;
  productDetail: any;
}

const initialState: productDetailsSliceProps = {
  quantity: 0,
  selectedImageCarouselIndex: 0,
  products: [],
  productId: '',
  productDetail: {},
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
    setProducts: (state: productDetailsSliceProps, action: any) => {
      console.log(`Set Products: ${action.payload}`);
      state.products = [...state.products, ...action.payload];
    },
    setproductId: (
      state: productDetailsSliceProps,
      action: PayloadAction<string>,
    ) => {
      console.log(`Set Products: ${action.payload}`);
      state.productId = action?.payload;
    },
    setProductDetails: (
      state: productDetailsSliceProps,
      action: PayloadAction<any>,
    ) => {
      console.log(`Set Products: ${action.payload}`);
      state.productDetail = action?.payload;
    },
  },
});

export const {
  setDecrementQuantity,
  setIncrementQuantity,
  setSelectedImageCarouselIndex,
  setProducts,
  setproductId,
  setProductDetails,
} = productDetailsSlice.actions;

export const selectQuantity = (state: RootState) =>
  state.productDetailsSlice.quantity;

export const selectSelectedImageCarouselIndex = (state: RootState) =>
  state.productDetailsSlice.selectedImageCarouselIndex;

export const selectProducts = (state: RootState) =>
  state.productDetailsSlice.products;

export const selectProductId = (state: RootState) =>
  state.productDetailsSlice.productId;

export const selectProductDetails = (state: RootState) =>
  state.productDetailsSlice.productDetail;

export default productDetailsSlice.reducer;
