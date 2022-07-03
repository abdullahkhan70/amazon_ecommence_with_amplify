import { takeLatest } from "redux-saga/effects";
import { getUsers } from "../redux/userSlice";
import { handleGetUser } from "./handlers/userHandler";

export function* rootSaga() {
    yield takeLatest(getUsers.type, handleGetUser);
}