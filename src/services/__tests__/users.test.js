import mockAxios from 'axios';
import { getUsersByAgency, addUser } from '../users';

describe('Testing users service', () => {

    it('Should call getUsersByAgency and return the agency users',  async () => {
        const dataResolved = { 
            data: [
                {
                    id: 1,
                    FirstName: "bilal",
                    LastName: "dif",
                    agencyId: 9856698,
                    username: 'bilal',
                    email: "bilal89dif@gmail.com",
                    roles: [
                        { 
                            companyId: 0,
                            name: "agency_owner",
                            roleId: 1,
                            type: "agency"
                        }
                    ],
                }
            ],
            status: 'success'
        }

        mockAxios.get.mockImplementationOnce(() => 
            Promise.resolve(dataResolved)
        );
        
        const getAgencyUsers = await getUsersByAgency(123456);
        expect(mockAxios.get).toHaveBeenCalledTimes(1);
        expect(getAgencyUsers).toEqual(dataResolved);
    });

    it('Should call addUser and return the success',  async () => {
        const dataResolved = { 
            status: 'success',
            message: 'user created'
        }

        mockAxios.post.mockImplementationOnce(() => 
            Promise.resolve(dataResolved)
        );
        
        const user =  {
            "FirstName": "bilal",
            "LastName": "Dif",
            "username": "bilal",
            "password": "12121212",
            "roles": [1,2,4],
            "agencyId": 123456,
            "companyId": 125
        }

        const addNewUser = await addUser(user);
        expect(mockAxios.post).toHaveBeenCalledTimes(1);
        expect(mockAxios.post).toHaveBeenCalledWith('/users', user);
        expect(addNewUser).toEqual(dataResolved);
    });

});