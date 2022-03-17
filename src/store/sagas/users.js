import { call, put, takeLatest } from "redux-saga/effects";
import { fetchUsers } from "../../api/users";
import {
  FETCH_USERS,
  FETCH_USERS_ERROR,
  FETCH_USERS_SUCCESS,
} from "../actions/users";

export function* usersSaga() {
  yield takeLatest(FETCH_USERS, fetchUsersSaga);
}

function* fetchUsersSaga() {
  try {
    const response = yield call(fetchUsers);
    const payload = response.data;

    yield put({ type: FETCH_USERS_SUCCESS, payload });
  } catch (error) {
    yield put({ type: FETCH_USERS_ERROR, error });
  }
}
