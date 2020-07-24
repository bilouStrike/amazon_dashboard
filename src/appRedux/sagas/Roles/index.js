import {
    all,
    call,
    put,
    takeLatest
} from 'redux-saga/effects';
import {
    GET_ROLE_START,
    ADD_ROLE_START
} from 'constants/ActionTypes';

import { getRolesByAgency, addRole } from 'services/roles';
import { 
    getRolesSuccess,
    getRolesFailed,
    addRoleSuccess,
    addRoleFailed,
} from 'appRedux/actions/Roles';

function* getRolesProccess({payload}) {
    try {
        const { statusText, data } = yield call(getRolesByAgency, payload);
        yield put(getRolesSuccess(data));
    } catch (error) {
        yield put(getRolesFailed(error.message));
    }
}

function* addRoleProccess({payload}) {
    try {
        const { statusText, data } = yield call(addRole, payload);
        yield put(addRoleSuccess(data));
    } catch (error) {
        yield put(addRoleFailed(error.message));
    }
}

/* ***************************************/
// Define the Watchers for the saga midlleware
/************************************* */

function* getRolesStartWatcher() {
   yield takeLatest(GET_ROLE_START, getRolesProccess);
}

function* addRoleStartWatcher() {
    yield takeLatest(ADD_ROLE_START, addRoleProccess);
}

export default function* authSagas() {
    yield all([
      call(getRolesStartWatcher),
    ]);
}

 