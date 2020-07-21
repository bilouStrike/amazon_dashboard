import {
    SET_CURRENT_COMPANY
} from "../../constants/ActionTypes";

export const setCurrentCompany = (company) => ({
    type: SET_CURRENT_COMPANY,
    payload: company,
});
