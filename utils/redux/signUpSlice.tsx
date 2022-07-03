import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../store';

interface signUpSliceProps {
  signUpUserName: string;
  signUpPassword: string;
  signUpEmail: string;
  signUpPhoneNumber: string;
  signUpPhoneNumberCode: string;
  signUpCountryPickerModal: Boolean;
}

const initialState: signUpSliceProps = {
  signUpUserName: '',
  signUpPassword: '',
  signUpEmail: '',
  signUpPhoneNumber: '',
  signUpPhoneNumberCode: '+1',
  signUpCountryPickerModal: false,
};

export const signUpSlice = createSlice({
  name: 'signUpSlice',
  initialState,
  reducers: {
    setSignUpUserName: (
      state: signUpSliceProps,
      action: PayloadAction<string>,
    ) => {
      state.signUpUserName = action.payload;
    },
    setSignUpPassword: (
      state: signUpSliceProps,
      action: PayloadAction<string>,
    ) => {
      state.signUpPassword = action.payload;
    },
    setSignUpEmail: (
      state: signUpSliceProps,
      action: PayloadAction<string>,
    ) => {
      state.signUpEmail = action.payload;
    },
    setSignUpPhoneNumber: (
      state: signUpSliceProps,
      action: PayloadAction<string>,
    ) => {
      state.signUpPhoneNumber = action.payload;
    },
    setSignUpPhoneNumberCode: (
      state: signUpSliceProps,
      action: PayloadAction<string>,
    ) => {
      state.signUpPhoneNumberCode = action.payload;
    },
    setSignUpCountryPickerModal: (
      state: signUpSliceProps,
      action: PayloadAction<Boolean>,
    ) => {
      state.signUpCountryPickerModal = action.payload;
    },
  },
});

export const {
  setSignUpPassword,
  setSignUpUserName,
  setSignUpEmail,
  setSignUpPhoneNumber,
  setSignUpPhoneNumberCode,
  setSignUpCountryPickerModal,
} = signUpSlice.actions;

export const selectSignUpPassword = (state: RootState) =>
  state.signUpSlice.signUpPassword;
export const selectSignUpUserName = (state: RootState) =>
  state.signUpSlice.signUpUserName;
export const selectSignUpEmail = (state: RootState) =>
  state.signUpSlice.signUpEmail;
export const selectSignUpPhoneNumber = (state: RootState) =>
  state.signUpSlice.signUpPhoneNumber;
export const selectSignUpPhoneNumberCode = (state: RootState) =>
  state.signUpSlice.signUpPhoneNumberCode;
export const selectSignUpCountryPickerModal = (state: RootState) =>
  state.signUpSlice?.signUpCountryPickerModal;
export default signUpSlice.reducer;
