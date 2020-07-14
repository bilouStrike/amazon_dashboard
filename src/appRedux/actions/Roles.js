import {
    GET_ROLE_START,
    GET_ROLE_SUCCESS,
    GET_ROLE_FAILED,
    ADD_ROLE_START,
    ADD_ROLE_SUCCESS,
    ADD_ROLE_FAILED
} from "../../constants/ActionTypes";

export const getRolesStart = () => ({
    type: GET_ROLE_START,
});
  
export const getRolesSuccess = (roles) => ({
    type: GET_ROLE_SUCCESS,
    payload: roles,
});

export const getRolesFailed = (error) => ({
    type: GET_ROLE_FAILED,
    payload: error,
});

export const addRoleStart = (role) => ({
    type: ADD_ROLE_START,
    payload: role
});
  
export const addRoleSuccess = (role) => ({
    type: ADD_ROLE_SUCCESS,
    payload: role,
});

export const addRoleFailed = (error) => ({
    type: ADD_ROLE_FAILED,
    payload: error,
});
