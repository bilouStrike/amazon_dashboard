import Http from '../../util/Http';

/** Get all roles */
export const getPermissions = async () => {
  const { data, statusText } = await Http.get('/permissions');
  return { data, statusText };
};

/** Add new role */
export const addPermission = async (permission) => {
  let message, status;
  const { data, statusText } = await Http.post('/permissions', permission);
  if( statusText === 'Created' ) {
    status = 'success';
    message = 'Permission created';
  } else {
    status = 'error';
    message = 'Something wrong';
  }
  return { data, status, message };
};