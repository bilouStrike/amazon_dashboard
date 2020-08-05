import { 
    isAuth,
    getServicePermissions,
    companyRoles,
    CheckPermission
} from './index';

describe('Testing isAuth function', () => {
    let servicePermissions, rolePermissions;
    
    it('Should return true', () => {
        servicePermissions = [{name:"manage_selles"}];
        rolePermissions = ["manage_selles", "manage_roles"]
        expect(isAuth(servicePermissions,rolePermissions)).toBeTruthy();
    });

    it('Should return false', () => {
        servicePermissions = [{name:"manage_selles"}];
        rolePermissions = []
        expect(isAuth(servicePermissions,rolePermissions)).toBeFalsy();
    });

    it('Should return false', () => {
        servicePermissions = [];
        rolePermissions = ["manage_selles", "manage_roles"]
        expect(isAuth(servicePermissions,rolePermissions)).toBeFalsy();
    });

    it('Should return false', () => {
        servicePermissions = [{name:"manage_selles"}];
        rolePermissions = ["manage_roles"]
        expect(isAuth(servicePermissions,rolePermissions)).toBeFalsy();
    });

    it('Should return false', () => {
        servicePermissions = [];
        rolePermissions = []
        expect(isAuth(servicePermissions,rolePermissions)).toBeFalsy();
    });

    it('Should return false', () => {
        servicePermissions = ["manage_roles"];
        rolePermissions = ["manage_selles"]
        expect(isAuth(servicePermissions,rolePermissions)).toBeFalsy();
    });

});

describe('Testing getServicePermissions function', () => {
    let permissions, service
    it('should return null', () => {
        permissions = null;
        service = "Sales";
        expect(getServicePermissions(permissions, service)).toBeNull();
    });

    it('Should return ["manage_Sells"] ', () => {
        permissions = [
            {id: 1, name: "manage_Sells", service: "Sales"},
            {id: 1, name: "manage_inventory", service: "Inventory"}
        ];
        service = "Sales";
        expect(getServicePermissions(permissions, service)).toEqual([{id: 1, name: "manage_Sells", service: "Sales"}]);
    });

    it('Should return no permissions in Inventory service ', () => {
        permissions = [
            {id: 1, name: "manage_Sells", service: "Sales"},
            {id: 1, name: "manage_users", service: "Users"}
        ];
        service = "Inventory";
        expect(getServicePermissions(permissions, service)).toEqual([]);
    });

    it('Should return no permissions', () => {
        permissions = [
            {id: 1, name: "manage_Sells", service: "Sales"},
            {id: 1, name: "manage_users", service: "Users"}
        ];
        service = "";
        expect(getServicePermissions(permissions, service)).toEqual([]);
    });

});

describe('Testing companyRoles function', () => {
    let currentCompany, userRoles;

    it('Should return company A owner role', () => {
        currentCompany = { id:1, name:'company A' };
        userRoles = [
            { roleId:1, companyId:1, name: 'company A owner' },
            { roleId:2, companyId:2, name: 'company B owner' },
        ];
        expect(companyRoles(currentCompany, userRoles)).toEqual([{roleId:1, companyId:1, name: 'company A owner'}]);
    });

    it('Should return no company role', () => {
        currentCompany = { id:3, name:'company A' };
        userRoles = [
            { roleId:1, companyId:1, name: 'company A owner' },
            { roleId:2, companyId:2, name: 'company B owner' },
        ];
        expect(companyRoles(currentCompany, userRoles)).toEqual([]);
    });

    it('Should return no company role', () => {
        currentCompany = { id:3, name:'company A' };
        userRoles = [];
        expect(companyRoles(currentCompany, userRoles)).toEqual([]);
    });

    it('Should return no company role', () => {
        currentCompany = null;
        userRoles = [];
        expect(companyRoles(currentCompany, userRoles)).toEqual([]);
    });

});

describe('Testing CheckPermission function', () => {
    const permissions = [
       { id: 1, name: "manage_Sells", service: "Sales" },
       { id: 2, name: "manage_dashboard", service: "Dashboard" },
       { id: 3, name: "manage_permissions", service: "Permissions" },
       { id: 4, name: "manage_roles", service: "Roles" },
       { id: 5, name: "manage_users", service: "Users" },
       { id: 6, name: "manage_companies", service: "Companies" },
       { id: 7, name: "manage_inventory", service: "Inventory"},
       { id: 8, name: "manage_company_roles", service: "Company/Roles" },
       { id: 9, name: "manage_company_users", service: "Company/Users" },
    ];

    const roles = [
        {
            id: 1,
            name: "admin_agency", 
            permissions: [
                "manage_Sells",
                "manage_dashboard",
                "manage_permissions",
                "manage_roles",
                "manage_users",
                "manage_companies",
                "manage_inventory",
                "manage_company_roles",
                "manage_company_users"
            ],
            agencyId: 5884176,
            companyId: 0,
            companyName: null 
        },
        { 
            id:2,
            name: "company_A_owner", 
            permissions: [
                "manage_Sells",
                "manage_dashboard",
                "manage_permissions",
                "manage_company_roles",
                "manage_company_users"
            ],
            agencyId: 5884176,
            companyId: 0,
            companyName: 1 
        },
        { 
            id:3,
            name: "company_A_client", 
            permissions: [
                "manage_Sells",
                "manage_dashboard",
            ],
            agencyId: 5884176,
            companyId: 5,
            companyName: 'company A' 
        },
    ];

    let userRoles, service, currentCompany, companyId;

    it('Should return true for role have all permission', () => {
        currentCompany = null;
        service = 'Sales';
        companyId = null;
        userRoles = [
            { roleId:1, companyId:null, name: 'admin_agency', companyName:null },
        ];
        expect(CheckPermission(permissions, userRoles, roles, service, currentCompany, companyId)).toBeTruthy();
    });

    it('Should return False for a user have no role to access to an service', () => {
        currentCompany = null;
        service = 'Users';
        companyId = null;
        userRoles = [
            { roleId:2, companyId:null, name: 'company_A_owner', companyName:null },
        ];
        expect(CheckPermission(permissions, userRoles, roles, service, currentCompany, companyId)).toBeFalsy();
    });

    it('Should return False for a company user have no role to access to an company service', () => {
        currentCompany = { id:5, companyName:'company A' };
        service = 'Users';
        companyId = 5;
        userRoles = [
            { roleId:3, companyId:5, name: 'company_A_client', companyName:'company A' },
        ];
        expect(CheckPermission(permissions, userRoles, roles, service, currentCompany, companyId)).toBeFalsy();
    });

    it('Should return False for user have no role', () => {
        currentCompany = null;
        service = 'Users';
        companyId = 5;
        userRoles = [];
        expect(CheckPermission(permissions, userRoles, roles, service, currentCompany, companyId)).toBeFalsy();
    });

})