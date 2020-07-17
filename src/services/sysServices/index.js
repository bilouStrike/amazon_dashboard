// All the services and widgets of the system
import Http from '../../util/Http';

/** Get all roles */
export const getServices = async () => {
  const { data, statusText } = await Http.get('/services');
  return { data, statusText };
};
