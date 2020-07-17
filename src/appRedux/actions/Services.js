import {
    GET_SERVICES_START,
    GET_SERVICES_SUCCESS,
    GET_SERVICES_FAILED,
} from "../../constants/ActionTypes";

export const getServicesStart = () => ({
    type: GET_SERVICES_START,
});
 
export const getServicesSuccess = (services) => ({
    type: GET_SERVICES_SUCCESS,
    payload: services,
});

export const getServicesFailed = (error) => ({
    type: GET_SERVICES_FAILED,
    payload: error,
});

