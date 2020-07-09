import {
    all,
    call,
    fork,
    put,
    takeLatest
} from 'redux-saga/effects';
import {
    SIGNIN_START
} from 'constants/ActionTypes';
import { signIn } from 'services/auth';
import { 
    signInSuccess,
    signInFailed
} from 'appRedux/actions/Auth';

function* signInProcess({ payload }) {
    try {
        const { status, data, message } = yield call(signIn, payload);
        if( status === 'success' ) {
            yield put(signInSuccess(data));
        } else {
            yield put(signInFailed(message));
        }
    } catch (error) {
        yield put(signInFailed(error.message));
    }
}

/* ***************************************/
// Define the Watchers for the saga midlleware
/************************************* */

function* singInStartWatcher() {
   yield takeLatest(SIGNIN_START, signInProcess);
}

export default function* authSagas() {
    yield all([
      call(singInStartWatcher)
    ]);
}

 