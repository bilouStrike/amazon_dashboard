import React from 'react';
import { Card, Table } from 'antd';

const columns = [
  {
    title: 'Company name',
    dataIndex: 'name',
    key: 'name',
  }
];

const Home = () => {
    const dataview = [];
    return (
      <>
        <Card title="Companies List">
          <Table className="gx-table-responsive" columns={columns} dataSource={dataview}/>
        </Card> 
      </>
    );
};

export default Home;