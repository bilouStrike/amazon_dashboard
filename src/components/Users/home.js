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
    dataIndex: 'name',
    key: 'user',
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
          <Tag color='green' key={role}>
            {role.toUpperCase()}
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

const Home = ({match}) => {

    const [users, setUsers] = useState([]);  
    const { agencyId, companyId } = useSelector(state => state.auth);

    useEffect(() => {
        const getUsers = async () => {
            if (match.path === '/users') {
                const { data } = await getAgencyUsers(agencyId);
                setUsers(data);
            } else {
                const { data } = await getCompanyUsers(companyId);
                setUsers(data);
            }
        }
        getUsers();
    }, []);

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