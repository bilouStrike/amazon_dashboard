import {
    all,
    call,
    put,
    takeLatest
} from 'redux-saga/effects';
import {
    GET_COMPANIES_START
} from 'constants/ActionTypes';

import { getCompaniesByAgency, getCompanyById } from 'services/company';
import { 
    getCompaniesSuccess,
    getCompaniesFailed
} from 'appRedux/actions/Companies';

function* getCompaniesProccess({payload}) {
    const { companyId, agencyId } = payload;
    let companiesData; 
    try {
        if ( companyId != null ) {
            const { statusText, data } = yield call(getCompanyById, companyId);
            companiesData = data; 
        } else {
            const { statusText, data } = yield call(getCompaniesByAgency, agencyId);
            companiesData = data; 
        }
        if( companiesData.length === 0 ) {
            yield put(getCompaniesSuccess(['no-data']));
            return;
        }
        yield put(getCompaniesSuccess(companiesData));
    } catch (error) {
        yield put(getCompaniesFailed([error.message]));
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

 