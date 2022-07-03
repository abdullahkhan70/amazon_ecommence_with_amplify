import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../store';

interface signInSliceProps {
  signInUserName: string;
  signInPassword: string;
}

const initialState: signInSliceProps = {
  signInUserName: '',
  signInPassword: '',
};

export const signInSlice = createSlice({
  name: 'signInSlice',
  initialState,
  reducers: {
    setSignInUserName: (
      state: signInSliceProps,
      action: PayloadAction<string>,
    ) => {
      state.signInUserName = action.payload;
    },
    setSignInPassword: (
      state: signInSliceProps,
      action: PayloadAction<string>,
    ) => {
      state.signInPassword = action.payload;
    },
  },
});

export const {setSignInPassword, setSignInUserName} = signInSlice.actions;

export const selectSignInPassword = (state: RootState) =>
  state.signInSlice.signInPassword;
export const selectSignInUserName = (state: RootState) =>
  state.signInSlice.signInUserName;
export default signInSlice.reducer;
