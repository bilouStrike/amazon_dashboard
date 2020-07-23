import React,{ useState, useEffect } from 'react';
import { Card, Table, Tag } from 'antd';
import { useSelector } from 'react-redux';
import AddRole from './addRole';
import UpdateRolePermissions from 'components/Permissions/updateRolePermissions';
import { AddKeyToArrayOfObject } from 'helpers/dataFormat';
import { getCompanyRoles } from 'services/company';
import { getRolesByAgency } from 'services/roles';

const columns = [
  {
    title: 'Role name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Permissions',
    dataIndex: 'permissions',
    key: 'permissions',
    render: permissions => (
      <>
        { permissions ? permissions.map(permission => (
          <Tag color='green' key={permission}>
            {permission.toUpperCase()}
          </Tag>
        ) ) : null}
      </>
      )
  },
  {
    title: 'Manage permissions',
    key: 'action',
    render: (role) => {
      return <UpdateRolePermissions
      key={role.id}
      roleId={role.id}
      roleName={role.name}
      permissionsList={role.permissions}
    />
    }
  }
];

const Home = ({match}) => {
    const [roles, setRoles] = useState([]);
    const { currentCompany } = useSelector(state => state.companies);
    const { agencyId } = useSelector(state => state.auth);
    console.log(match.path);

    useEffect(() => {
          const getRoles = async () => {
          if (match.path === '/company/roles') {
            const { data } = await getCompanyRoles(currentCompany);
            setRoles(data);
          } else {
            const { data } = await getRolesByAgency(agencyId);
            setRoles(data);
          }
        }
        getRoles();
    }, [currentCompany]);
    const dataview = AddKeyToArrayOfObject(roles);
    return (
      <>
        <AddRole />
        <Card title="Roles List">
          <Table className="gx-table-responsive" columns={columns} dataSource={dataview}/>
        </Card> 
      </>
    );
};

export default Home;