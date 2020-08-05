import Http from '../../util/Http';
import { getByFieldValue } from '../helpers';

/** Sign in */
export const signIn = async (usercredentials) => {
  try {
    const { data } = await Http.get(`/users?username=${usercredentials.username}`);
    let status, message;
    if ( data.length != 0 ) {
      status = 'success';
      message = 'Sign in success';
    } else {
      status = 'error';
      message = 'Incorrect data';
    }
    return { data, status, message }
  } catch (error) {
    return 'Network Error';
  }
};

/** Sign up */
export const signUp = async (userData) => {
  let status, message;
  
  const checkEmail = await getByFieldValue('users', 'email', userData.email)
  if ( checkEmail.length != 0 ) {
    return { 
      status :'error',
      message :'This email aleady used!'
    }
  }

  const checkUsername = await getByFieldValue('users', 'username', userData.username)
  if ( checkUsername.length != 0 ) {
    return { 
      status :'error',
      message :'This username aleady used!'
    }
  }
  
  try {
    const { statusText } = await Http.post(`/users`, userData);
    if ( statusText === 'Created' ) {
      status = 'success';
      message = 'Resgistration success, check you email to activate your account';
    } else {
      status = 'error';
      message = 'Something wrong! Incorrect data';
    }
    return { status, message }
  } catch (error) {
    return 'Network Error';
  }

};




