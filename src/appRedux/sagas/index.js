import { all } from 'redux-saga/effects';
import authSagas from './Auth';
import rolesSagas from './Roles';
import permissionsSagas from './Permissions';
import servicesSagas from './Services';
import companySagas from './Companies';

export default function* rootSaga() {
  yield all([
    authSagas(),
    rolesSagas(),
    permissionsSagas(),
    servicesSagas(),
    companySagas()
  ]);
}
