import Http from '../../util/Http';

export const addUser = async (user) => {
  let message, status;
  const { data, statusText } = await Http.post('/users', user);
  if( statusText === 'Created' ) {
    status = 'success';
    message = 'User created';
  } else {
    status = 'error';
    message = 'Something wrong';
  }
  return { data, status, message };
}

export const getUsersByAgency = async(agencyId) => {
  const { data, statusText } = await Http.get(`/users?agencyId=${agencyId}`);
  return { data }
}

