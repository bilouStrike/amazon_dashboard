import {
    GET_PERMISSIONS_START,
    GET_PERMISSIONS_SUCCESS,
    GET_PERMISSIONS_FAILED
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

