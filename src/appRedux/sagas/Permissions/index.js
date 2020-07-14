import {
    all,
    call,
    put,
    takeLatest
} from 'redux-saga/effects';
import {
    GET_PERMISSIONS_START,
} from 'constants/ActionTypes';

import { getPermissions } from 'services/permissions';
import { 
    getPermissionsSuccess,
    getPermissionsFailed,
} from 'appRedux/actions/Permissions';

function* getPermissionsProccess() {
    try {
        const { statusText, data } = yield call(getPermissions);
        yield put(getPermissionsSuccess(data));
    } catch (error) {
        yield put(getPermissionsFailed(error.message));
    }
}

/* ***************************************/
// Define the Watchers for the saga midlleware
/************************************* */

function* getpermissionsStartWatcher() {
   yield takeLatest(GET_PERMISSIONS_START, getPermissionsProccess);
}

export default function* permissionsSagas() {
    yield all([
      call(getpermissionsStartWatcher),
    ]);
}

 