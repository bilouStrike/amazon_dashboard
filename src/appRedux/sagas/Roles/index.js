import {
    all,
    call,
    put,
    takeLatest
} from 'redux-saga/effects';
import {
    GET_ROLE_START
} from 'constants/ActionTypes';

import { getRolesByAgency } from 'services/roles';
import { 
    getRolesSuccess,
    getRolesFailed,
} from 'appRedux/actions/Roles';

function* getRolesProccess({payload}) {
    try {
        const { statusText, data } = yield call(getRolesByAgency, payload);
        yield put(getRolesSuccess(data));
    } catch (error) {
        yield put(getRolesFailed(error.message));
    }
}

/* ***************************************/
// Define the Watchers for the saga midlleware
/************************************* */

function* getRolesStartWatcher() {
   yield takeLatest(GET_ROLE_START, getRolesProccess);
}

export default function* authSagas() {
    yield all([
      call(getRolesStartWatcher),
    ]);
}

 