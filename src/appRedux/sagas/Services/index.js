import {
    all,
    call,
    put,
    takeLatest
} from 'redux-saga/effects';
import {
    GET_SERVICES_START,
} from 'constants/ActionTypes';

import { getServices } from 'services/sysServices';
import {
    getServicesSuccess,
    getServicesFailed,
} from 'appRedux/actions/Services';

function* getServicesProccess() {
    try {
        const { statusText, data } = yield call(getServices);
        yield put(getServicesSuccess(data));
    } catch (error) {
        yield put(getServicesFailed(error.message));
    }
}

/* ***************************************/
// Define the Watchers for the saga midlleware
/************************************* */

function* getServicesStartWatcher() {
   yield takeLatest(GET_SERVICES_START, getServicesProccess);
}

export default function* servicesSagas() {
    yield all([
      call(getServicesStartWatcher),
    ]);
}

 