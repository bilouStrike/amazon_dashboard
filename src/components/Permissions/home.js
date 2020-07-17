import React from 'react';
import { Card, Table } from 'antd';
import { useSelector } from 'react-redux';
import permissions_data_format from './helper';
import AddPermission from './addPermission';

const columns = [
  {
    title: '#',
    dataIndex: 'key',
    key: 'key',
  },
  {
    title: 'Permission Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Service / Component',
    dataIndex: 'service',
    key: 'service',
  }
];

const Home = () => { 
    const { permissions } = useSelector(state => state.permissions);
    console.log(permissions);
    const dataview = permissions_data_format(permissions);
    return (
      <>
        <AddPermission />
        <Card title="Roles List">
          <Table className="gx-table-responsive" columns={columns} dataSource={dataview}/>
        </Card> 
      </>
    );
};

export default Home;