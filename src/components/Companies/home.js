import React, { useState, useEffect } from 'react';
import { Card, Table } from 'antd';
import { useSelector }  from 'react-redux';
import AddCompany from './addCompany';
import { AddKeyToArrayOfObject } from 'helpers/dataFormat';

const columns = [
  {
    title: 'Company name',
    dataIndex: 'name',
    key: 'name',
  }
];

const Home = () => {

    const [update, setUpdate] = useState(false);
    const doUpdate = () => setUpdate(!update);
    const { companies } = useSelector(state => state.companies);
    const DataView = AddKeyToArrayOfObject(companies);

    return (
      <>
        <AddCompany updateList={doUpdate}/>
        <Card title="Companies List">
          <Table className="gx-table-responsive" columns={columns} dataSource={DataView}/>
        </Card> 
      </>
    );
};

export default Home;