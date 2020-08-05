import mockAxios from 'axios';
import { signIn, signUp } from '../auth';

describe('Testing singin :', () => {

    it('Should calls signin and return success', async () => {
        const dataResolved = { 
            data: [{
                FirstName: "Better",
                LastName: "dif",
                agencyId: 5960117,
                companyId: null,
                username: 'bilal',
                id: 1,
                roles: [
                { companyId: 0,name: "agency_owner",roleId: 1,type: "agency" }
                ]
            }],
            status: 'success',
            message: 'Sign in success'
        }

        mockAxios.get.mockImplementationOnce(() => 
            Promise.resolve(dataResolved)
        );
        
        const userCredentails = { username:'user', password:'123456'};

        const signin = await signIn(userCredentails);
        expect(mockAxios.get).toHaveBeenCalledTimes(1);
        expect(signin).toEqual(dataResolved);
        // expect(mockAxios.get).toHaveBeenCalledWith(userCredentails);  
    });

    it('Should fail calls signin and throw error', async () => {  
        const errorMessage = 'Network Error';
        mockAxios.get.mockImplementationOnce(() =>
            Promise.reject('Network Error'),
        );
        const signin = await signIn();
        expect(signin).toEqual(errorMessage);
    });
    
});

describe('Testing Signup :', () => {

    it('Should call signup and success ', async () => {

        const dataResolved = {
            status: 'success',
            message: 'Resgistration success, check you email to activate your account',
            data: []
        }

        mockAxios.post.mockImplementationOnce(() => 
            Promise.resolve(dataResolved)
        );
        
        // This test enabled only when the API is ready
        /*const signup = await signUp({
            "FirstName": "bilal",
            "LastName": "Dif",
            "email": "admin@gmail.com",
            "username": "bilal",
            "password": "12121212",
            "agreement": true
        });

        expect(mockAxios.post).toHaveBeenCalledTimes(1);
        expect(mockAxios.post).toHaveBeenCalledWith('/users', {
            "FirstName": "bilal",
            "LastName": "Dif",
            "email": "admin@gmail.com",
            "username": "bilal",
            "password": "12121212",
            "agreement": true
        });*/
    });

    // This test enabled only when the API is ready
    /*it('Should fail calls signup and throw error', async () => {  
        const errorMessage = 'Network Error';
        mockAxios.get.mockImplementationOnce(() =>
            Promise.reject('Network Error'),
        );
        const signup = await signUp();
        expect(signup).toEqual(errorMessage);
    });*/

});