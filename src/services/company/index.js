import Http from '../../util/Http';

export const getCompaniesAgency = async (agencyId) => {
    const { data, statusText } = await Http.get(`/companies?agencyId=${agencyId}`, agencyId);
    return { data, statusText }; 
}

export const getCompanyUsers = async (compantId) => {

}