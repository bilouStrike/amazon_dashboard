import {
    GET_PERMISSIONS_START,
    GET_PERMISSIONS_SUCCESS,
    GET_PERMISSIONS_FAILED,
    ADD_PERMISSION_START,
    ADD_PERMISSION_SUCCESS,
    ADD_PERMISSION_FAILED
} from "../../constants/ActionTypes";

export const getPermissionsStart = () => ({
    type: GET_PERMISSIONS_START,
});
  
export const getPermissionsSuccess = (permissions) => ({
    type: GET_PERMISSIONS_SUCCESS,
    payload: permissions,
});

export const getPermissionsFailed = (error) => ({
    type: GET_PERMISSIONS_FAILED,
    payload: error,
});

export const addPermissionStart = (permissions) => ({
    type: ADD_PERMISSION_START,
    payload: permissions
});
  
export const addPermissionSuccess = (permissions) => ({
    type: ADD_PERMISSION_SUCCESS,
    payload: permissions,
});

export const addPermissionFailed = (error) => ({
    type: ADD_PERMISSION_FAILED,
    payload: error,
});

