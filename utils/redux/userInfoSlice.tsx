import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../store';

interface userInfoSliceProps {
  countryPickerModal: Boolean;
  countryPickerName: string;
  userFullName: string;
  userPhoneNumber: string;
  userAddressRequriedInfo: string;
  userAddressOptionalInfo: string;
  userCity: string;
  userState: string;
  userZipCode: string;
  userMarkAsDefault: Boolean;
}

const initialState: userInfoSliceProps = {
  countryPickerModal: false,
  countryPickerName: 'United States',
  userAddressOptionalInfo: '',
  userAddressRequriedInfo: '',
  userFullName: '',
  userPhoneNumber: '',
  userCity: '',
  userState: '',
  userZipCode: '',
  userMarkAsDefault: false,
};

export const userInfoSlice = createSlice({
  name: 'userInfoSlice',
  initialState,
  reducers: {
    setCountryPickerModal: (
      state: userInfoSliceProps,
      action: PayloadAction<Boolean>,
    ) => {
      state.countryPickerModal = action.payload;
    },
    setCountryPickerName: (
      state: userInfoSliceProps,
      action: PayloadAction<string>,
    ) => {
      state.countryPickerName = action.payload;
    },
    setUserAddressOptionalInfo: (
      state: userInfoSliceProps,
      action: PayloadAction<string>,
    ) => {
      state.userAddressOptionalInfo = action.payload;
    },
    setUserAddressRequriedInfo: (
      state: userInfoSliceProps,
      action: PayloadAction<string>,
    ) => {
      state.userAddressRequriedInfo = action.payload;
    },
    setUserFullName: (
      state: userInfoSliceProps,
      action: PayloadAction<string>,
    ) => {
      state.userFullName = action.payload;
    },
    setUserPhoneNumber: (
      state: userInfoSliceProps,
      action: PayloadAction<string>,
    ) => {
      state.userPhoneNumber = action.payload;
    },
    setUserCity: (state: userInfoSliceProps, action: PayloadAction<string>) => {
      state.userCity = action.payload;
    },
    setUserState: (
      state: userInfoSliceProps,
      action: PayloadAction<string>,
    ) => {
      state.userState = action.payload;
    },
    setUserZipCode: (
      state: userInfoSliceProps,
      action: PayloadAction<string>,
    ) => {
      state.userZipCode = action.payload;
    },
    setMarkAsDefault: (
      state: userInfoSliceProps,
      action: PayloadAction<Boolean>,
    ) => {
      state.userMarkAsDefault = action.payload;
    },
  },
});

export const {
  setCountryPickerModal,
  setCountryPickerName,
  setUserAddressOptionalInfo,
  setUserAddressRequriedInfo,
  setUserCity,
  setUserFullName,
  setUserPhoneNumber,
  setUserState,
  setUserZipCode,
  setMarkAsDefault,
} = userInfoSlice.actions;

export const selectCountryPickerModal = (state: RootState) =>
  state.userInfoSlice.countryPickerModal;
export const selectCountryPickerName = (state: RootState) =>
  state.userInfoSlice.countryPickerName;
export const selectUserAddressOptionalInfo = (state: RootState) =>
  state.userInfoSlice.userAddressOptionalInfo;
export const selectUserAddressRequriedInfo = (state: RootState) =>
  state.userInfoSlice.userAddressRequriedInfo;
export const selectUserFullName = (state: RootState) =>
  state.userInfoSlice.userFullName;
export const selectUserPhoneNumber = (state: RootState) =>
  state.userInfoSlice.userPhoneNumber;
export const selectUserCity = (state: RootState) =>
  state.userInfoSlice.userCity;
export const selectUserState = (state: RootState) =>
  state.userInfoSlice.userState;
export const selectUserZipCode = (state: RootState) =>
  state.userInfoSlice.userZipCode;
export const selectMarkAsDefault = (state: RootState) =>
  state.userInfoSlice.userMarkAsDefault;
export default userInfoSlice.reducer;
