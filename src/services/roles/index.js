import Http from '../../util/Http';

/** Get all roles */
export const getRoles = async () => {
  const { data, statusText } = await Http.get('/roles');
  return { data, statusText };
};


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