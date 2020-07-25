import React, { useEffect, useState } from 'react';
import { Card, Table } from 'antd';
import { useSelector }  from 'react-redux';
import { getCompaniesByAgency } from 'services/company';
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

    const { agencyId } = useSelector(state => state.auth);
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
      const getCompanies = async() => {
        const {data} = await getCompaniesByAgency(agencyId);
        setCompanies(data)
      }
      getCompanies();
    }, [companies]);

    const DataView = AddKeyToArrayOfObject(companies);
    return (
      <>
        <AddCompany />
        <Card title="Companies List">
          <Table className="gx-table-responsive" columns={columns} dataSource={DataView}/>
        </Card> 
      </>
    );
};

export default Home;