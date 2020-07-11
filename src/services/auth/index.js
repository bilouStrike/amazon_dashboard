import Http from '../../util/Http';
import { signin, signup } from '../mockEndPoint';


/** Sign in */
export const signIn = async (usercredentials) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
  const result = await signin(usercredentials);
  return result
};

/** Sign up */
export const signUp = async (useData) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
  const result = await signup(useData);
  return result;
};