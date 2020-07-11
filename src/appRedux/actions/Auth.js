import {
    SIGNIN_START,
    SIGNIN_SUCCESS,
    SIGNIN_FAILED,
    SIGNOUT,
} from "../../constants/ActionTypes";

export const signInStart = (credentials) => ({
    type: SIGNIN_START,
    payload: credentials,
});
  
export const signInSuccess = (userData) => ({
    type: SIGNIN_SUCCESS,
    payload: userData,
});
  
export const signInFailed = (error) => ({
    type: SIGNIN_FAILED,
    payload: error,
});

export const signOut = () => ({
    type: SIGNOUT,
});