import {
    SET_CURRENT_COMPANY,
    GET_COMPANIES_SUCCESS,
    GET_COMPANIES_FAILED,
    GET_COMPANIES_START,
    SET_COMPANIES
} from "../../constants/ActionTypes";

export const setCurrentCompany = (company) => ({
    type: SET_CURRENT_COMPANY,
    payload: company,
});

export const getCompaniesStart = (agencyId, companyId) => ({
    type: GET_COMPANIES_START,
    payload: {agencyId, companyId}
});

export const getCompaniesSuccess = (companies) => ({
    type: GET_COMPANIES_SUCCESS,
    payload: companies,
});

export const getCompaniesFailed = (error) => ({
    type: GET_COMPANIES_FAILED,
    payload: error,
});

export const setCompanies = (data) => ({
    type: SET_COMPANIES,
    payload: data,
});
