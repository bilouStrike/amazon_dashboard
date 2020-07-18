import React from 'react';
import { Card, Table } from 'antd';
import { useSelector } from 'react-redux';
import { AddKeyToArrayOfObject } from 'helpers/dataFormat';
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
    const dataview = AddKeyToArrayOfObject(permissions);
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