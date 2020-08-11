import {
    all,
    call,
    put,
    takeLatest
} from 'redux-saga/effects';
import {
    GET_COMPANIES_START
} from 'constants/ActionTypes';

import { getCompaniesByAgency } from 'services/company';
import { 
    getCompaniesSuccess,
    getCompaniesFailed
} from 'appRedux/actions/Companies';

function* getCompaniesProccess({payload}) {
    try {
        const { statusText, data } = yield call(getCompaniesByAgency, payload);
        yield put(getCompaniesSuccess(data));
    } catch (error) {
        yield put(getCompaniesFailed(error.message));
    }
}

/* ***************************************/
// Define the Watchers for the saga midlleware
/************************************* */

function* getCompaniesStartWatcher() {
   yield takeLatest(GET_COMPANIES_START, getCompaniesProccess);
}

export default function* companySagas() {
    yield all([
      call(getCompaniesStartWatcher),
    ]);
}

 