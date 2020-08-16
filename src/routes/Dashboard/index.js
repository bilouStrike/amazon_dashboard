import React from 'react';
import {Col, Row} from "antd";
import BalanceHistory from "components/dashboard/BalanceHistory";
import IconWithTextCard from "components/Metrics/IconWithTextCard";
import Sellers from "components/Sellers/sellers";

import Auxiliary from "util/Auxiliary";

const Dashboard = () => {
  return (
    <Auxiliary>
      <Row>
        <Col xl={18} lg={24} md={24} sm={24} xs={24}>
          <BalanceHistory/>
        </Col>
        <Col xl={6} md={24} sm={24} xs={24}>
            
        </Col>
        <Col xl={12} lg={12} md={12} sm={12} xs={12} className="gx-col-full">
            <IconWithTextCard icon="visits" iconColor="geekblue" title="2,380" subTitle="Visits this year"/>
        </Col>
        <Col xl={12} lg={12} md={12} sm={12} xs={12} className="gx-col-full">
            <IconWithTextCard icon="visits" iconColor="geekblue" title="2,380" subTitle="Visits this year"/>
        </Col>
        <Col xl={24} lg={24} md={24} sm={24} xs={24}>
          <Sellers/>
        </Col>
      </Row>
    </Auxiliary>
)};
export default Dashboard;