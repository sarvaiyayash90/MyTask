import { takeLatest, put, call, all } from "redux-saga/effects";
import { GET_TABLE_DATA } from "../actions/actionTypes";
import { storeTabelData } from "../actions/actions";
import { setLocalStorage } from "../../helperfunctions";

function* getDataAction() {
  try {
    const result = yield fetch("https://reqres.in/api/users?page=1");
    const jsonData = yield result.json();
    yield setLocalStorage("users", JSON.stringify(jsonData.data));
    yield put(storeTabelData(jsonData.data));
    console.log("I AM HERE");
  } catch (error) {
    console.log(error);
  }
}

function* tabledata() {
  yield takeLatest(GET_TABLE_DATA, getDataAction);
}

export function* tableDataSaga() {
  yield all([call(tabledata)]);
}
export function* rootSaga() {
  yield all([call(tableDataSaga)]);
}
