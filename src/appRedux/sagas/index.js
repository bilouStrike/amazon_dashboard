import { all } from "redux-saga/effects";
import authSagas from "./Auth";
import rolesSagas from "./Roles";
import permissionsSagas from './Permissions';
import servicesSagas from './Services';

export default function* rootSaga() {
  yield all([
    authSagas(),
    rolesSagas(),
    permissionsSagas(),
    servicesSagas(),
  ]);
}