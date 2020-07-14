import Http from '../../util/Http';

/** Get all roles */
export const getPermissions = async () => {
  const { data, statusText } = await Http.get('/permissions');
  return { data, statusText };
};
