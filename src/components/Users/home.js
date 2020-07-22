import React, {useState, useEffect} from 'react';
import { Card, Table, Tag } from 'antd';
import { getAgencyUsers } from 'services/agency';
import { getCompanyUsers } from 'services/company';
import { useSelector } from 'react-redux';
import { AddKeyToArrayOfObject } from 'helpers/dataFormat';
import AddUser from './AddUser';
import UpdateUserRoles from 'components/Roles/updateUserRoles';

const columns = [
  {
    title: '#',
    dataIndex: 'id',
    key: '#',
  },
  {
    title: 'User',
    dataIndex: 'username',
    key: 'username',
  },
  {
    title: 'Password',
    dataIndex: 'password',
    key: 'password',
  },
  {
    title: 'Roles',
    dataIndex: 'roles',
    key: 'roles',
    render: roles => {
      return (
      <>
        { roles && roles.length != null ? roles.map(role => (
          <Tag color='green' key={role.roleId}>
            {role.name.toUpperCase()}
          </Tag>
        )): null}
      </>
    )}
  },
  {
    title: 'Update role',
    dataIndex: 'roles',
    key: 'update_role',
    render: (roles) => 
    <> 
      <UpdateUserRoles rolesList={roles} />
    </>
  },
  {
    title: 'Operations',
    dataIndex: 'operations',
    key: 'operations',
  }
];

const Home = () => {

    const [users, setUsers] = useState([]);  
    const { currentCompany } = useSelector(state => state.companies);
    useEffect(() => {
        const getUsers = async () => {
          const { data } = await getCompanyUsers(currentCompany);
          setUsers(data);
        }
        getUsers();
    }, [currentCompany]);
    console.log(users);
    const dataview = AddKeyToArrayOfObject(users);
    return (
      <>
        <AddUser />
        <Card title="Users List">
          <Table className="gx-table-responsive" columns={columns} dataSource={dataview}/>
        </Card> 
      </>
    );
};

export default Home;