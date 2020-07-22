import Http from '../util/Http';

export const getByFieldValue = async (collection, field, value) => {
   const { data } = await Http.get(`/${collection}?${field}=${value}`);
   return data;
}

export const formatResponse = () => {

   /*  if( statusText === 'Created' ) {
      status = 'success';
      message = 'Role created';
    } else {
      status = 'error';
      message = 'Something wrong';
    }*/
}