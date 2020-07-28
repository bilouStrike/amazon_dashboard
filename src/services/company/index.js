import Http from '../../util/Http';

export const getCompanyOfUsers = async (userId) => { 
    const { data } = await Http.get(`/users?id=${userId}`);
    return data;
}

export const addCompany = async (companyData) => {
    let message, status;
    const { data, statusText } = await Http.post('/companies', companyData);
    if( statusText === 'Created' ) {
      status = 'success';
      message = 'Company created';
    } else {
      status = 'error';
      message = 'Something wrong';
    }
    return { data, status, message }; 
}

export const getCompanyUsers = async(companyId) => {
  const { data, statusText } = await Http.get(`/users?companyId=${companyId}`);
  return { data }
}

export const getCompanyRoles = async(companyId) => {
  const { data, statusText } = await Http.get(`/roles?companyId=${companyId}`);
  return { data }
}

export const getCompaniesByAgency = async(agencyId) => {
  const { data, statusText } = await Http.get(`/companies?agencyId=${agencyId}`);
  return { data }
}

