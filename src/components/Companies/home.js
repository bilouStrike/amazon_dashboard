import React, { useState } from 'react';
import { useSelector }  from 'react-redux';
import { Result } from 'antd';
import AddCompany from './addCompany';
import CompanyItem from './companyItem';
import { SmileOutlined } from '@ant-design/icons';

const Home = () => {

    const [update, setUpdate] = useState(false);
    const doUpdate = () => setUpdate(!update);
    const { companies } = useSelector(state => state.companies);
    return (
      <>
        <div className="amazon-tool-service-page-header">
            <h2> Companies </h2>
            <AddCompany updateList={doUpdate}/>
        </div>
        { companies.length > 0 && companies[0] !== 'no-data' ? 
          companies.map((company) => 
               <CompanyItem {...company} key={company.id} />
          ) : <Result
            icon={<SmileOutlined />}
            title="No company created yet, start now"
            extra={<AddCompany updateList={doUpdate}/>}
          />
        }
        
      </>
    );
};

export default Home;