import mockAxios from 'axios';
import { getRolesByAgency, addRole } from '../roles';

describe('Testing roles service', () => {

    it('Should call getRolesByAgency and return the roles list',  async () => {
        const dataResolved = { 
            data: [{
                companyId: null,
                id: 1,
                name: "agency_owner",
                permissions:[
                    "manage_dashboard",
                    "manage_roles",
                    "manage_permissions",
                    "manage_company_roles",
                    "manage_company_users",
                    "manage_company_permissions",
                    "manage_Sells",
                    "manage_users",
                    "manage_companies",
                    "manage_inventory"
                ]
            }],
            status: 'success',
            message: ''
        }

        mockAxios.get.mockImplementationOnce(() => 
            Promise.resolve(dataResolved)
        );
        
        const getRoles = await getRolesByAgency(123456);
        expect(mockAxios.get).toHaveBeenCalledTimes(1);
        expect(getRoles).toEqual(dataResolved);
    });

    it('Should call addRole and return the success',  async () => {
        const dataResolved = { 
            status: 'success',
            message: 'Role created'
        }

        mockAxios.post.mockImplementationOnce(() => 
            Promise.resolve(dataResolved)
        );
        
        const role = {
            name: 'role name',
            permissions: [1,2,4]
        }

        const addNewRole = await addRole(role);
        expect(mockAxios.post).toHaveBeenCalledTimes(1);
        expect(mockAxios.post).toHaveBeenCalledWith('/roles', role);
        expect(addNewRole).toEqual(dataResolved);
    });

})