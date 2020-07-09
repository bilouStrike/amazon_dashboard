import { message } from "antd";

export const signin = ( userData ) => {
    const { email, password } = userData;
    let status, message, data = {};
    if ( email == 'demo@example.com' && password == 'demo#123' ) {
          status = 'success';
          data = {
            username: 'admin',
            token: 123456,
            role : 'agency_admin'
          };
          message = null;
    } else {
        status = 'error';
        message = 'invalid Data';
        data = '';
    }
    return {
        status,
        message,
        data,
    }
}
 
export const signup = (useData) => {
    /*const { name, email, password } = useData;
    let status, message;
    if( email == '' || name == '' || password == '') {
        status = 'error';
        message = 'Invalid data'
    } else {
        status = 'error';
        message = 'Invalid data'
    }
    return {
        status,
        message
    }*/
}