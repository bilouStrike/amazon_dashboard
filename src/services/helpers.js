import Http from '../util/Http';

export const getByFieldValue = async (collection, field, value) => {
   const { data } = await Http.get(`/${collection}?${field}=${value}`);
   return data;
}