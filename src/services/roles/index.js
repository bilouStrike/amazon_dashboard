import Http from '../../util/Http';

/** Get all roles */
export const getRolesByAgency = async (agencyId) => {
  const { data } = await Http.get(`/roles?agencyId=${agencyId}`);
  return { data };
};

export const getRolesByField = async (field, value) => {
  const { data, statusText } = await Http.get(`/roles?${field}=${value}`);
  return { data, statusText };
}

/** Add new role */
export const addRole = async (role) => {
  let message, status;
  const { data, statusText } = await Http.post('/roles', role);
  if( statusText === 'Created' ) {
    status = 'success';
    message = 'Role created';
  } else {
    status = 'error';
    message = 'Something wrong';
  }
  return { data, status, message };
};

/** Edit role */
export const updateRole = async (roleData, id) => {
  let message, status;
  const { data, statusText } = await Http.put(`/roles/${id}`, roleData);
  if( statusText === 'OK' ) {
    status = 'success';
    message = 'Permissions updated';
  } else {
    status = 'error';
    message = 'Something wrong';
  }
  return { data, status, message };
}