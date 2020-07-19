import Http from '../../util/Http';
import { signin, signup } from '../mockEndPoint';


/** Sign in */
export const signIn = async (usercredentials) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
  const { data } = await Http.get(`/users?name=${usercredentials.username}`);
  console.log(data);
  let status, message;
  if ( data.length != 0 ) {
    status = 'success';
  } else {
    status = 'error';
    message = 'Incorrect data';
  }
  return { data, status, message }
};

/** Sign up */
export const signUp = async (useData) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
  const result = await signup(useData);
  return result;
};