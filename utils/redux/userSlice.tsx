import {AnyAction, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../store';

interface userSliceProps {
  users: any;
}

const initialState: userSliceProps = {
  users: [],
};

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setUsers: (state: userSliceProps, actions: PayloadAction<any>) => {
      const userData = actions.payload;
      return {...state.users, ...userData};
    },
    getUsers: (state: userSliceProps) => {
      return state.users;
    },
  },
});

export const {setUsers, getUsers} = userSlice.actions;

export const selectSignInPassword = (state: RootState) =>
  state.signInSlice.signInPassword;
export const selectSignInUserName = (state: RootState) =>
  state.signInSlice.signInUserName;
export default userSlice.reducer;
