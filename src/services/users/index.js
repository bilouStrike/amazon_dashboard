import Http from '../../util/Http';

export const addUser = async (user) => {
  const { data, statusText } = await Http.post('/users', user);
  return { data, statusText };
}

