import { AnyAction } from "@reduxjs/toolkit";
import { call, put } from 'redux-saga/effects';
import { useAppDispatch } from "../../hooks/reduxHooks";
import { setUsers } from "../../redux/userSlice";
import { requestGetUser } from "../requests/user";
export function* handleGetUser(action: AnyAction): any {
    const dispatch = useAppDispatch();
    try {
        const response = yield call(requestGetUser)
        console.log(response);
        yield put(dispatch(setUsers(response)))
    } catch (error: any) {
        console.log(error);
    }
}