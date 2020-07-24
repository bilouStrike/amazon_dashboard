import React from 'react';
import { useSelector } from 'react-redux';

const Sales = () => {
  const { currentCompany } = useSelector(state => state.companies);
  return (
    <div>
      <div className="gx-d-flex justify-content-center">
      <h4> Datas services fro company :  {currentCompany ? currentCompany.name : null} </h4>
      </div>
    </div>
  );
};

export default Sales;
