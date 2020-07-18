const mockusersemails = [
    'bilal@mail.com',
    'bilal2@mail.com',
    'bilal3@mail.com',
];

export const signin = ( userData ) => {
    const { email, password } = userData;
    let status, message, data = {};
    if ( email == 'demo@example.com' && password == 'demo#123' ) {
          status = 'success';
          data = {
            username: 'admin',
            token: 123456,
            role : 'agency_admin',
            agencyId: 123456
          };
          message = null;
    } else {
        status = 'error';
        message = 'Invalid Credentials';
        data = '';
    }
    return {
        status,
        message,
        data,
    }
}
 
export const signup = (userData) => {
    const { email } = userData;
    if (mockusersemails.includes(email)) {
        return {
            status: 'error',
            message: 'An exist account is related with this email',
        }
    }
    return {
        status: 'success',
        message: 'email validation has been sent to activate your account',
    }
}

