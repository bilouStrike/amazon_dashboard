import React from 'react';
import { Card, Table, Tag } from 'antd';
import { useSelector } from 'react-redux';
import roles_data_format from './helpers';
import AddRole from './addRole';
import UpdateRolePermissions from 'components/Permissions/updateRolePermissions';

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
        { permissions.map(permission => (
          <Tag color='green' key={permission}>
            {permission.toUpperCase()}
          </Tag>
        ) )}
      </>
      )
  },
  {
    title: 'Manage permissions',
    key: 'action',
    render: (role) => {
      console.log(role.name)
      return <UpdateRolePermissions
      key={role.id}
      roleId={role.id}
      roleName={role.name}
      permissionsList={role.permissions}
  />

    }
      
  }
];

const Home = () => { 
    const { roles } = useSelector(state => state.roles);
    const dataview = roles_data_format(roles);
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