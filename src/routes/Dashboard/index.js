import React from 'react';
import {Col, Row} from "antd";
import BalanceHistory from "components/dashboard/BalanceHistory";
import IconWithTextCard from "components/Metrics/IconWithTextCard";

import Auxiliary from "util/Auxiliary";

const Dashboard = () => (
    <Auxiliary>
      <Row>
        <Col xl={18} lg={24} md={24} sm={24} xs={24}>
          <BalanceHistory/>
        </Col>
        <Col xl={6} md={24} sm={24} xs={24}>
            <Col xl={24} lg={12} md={12} sm={24} xs={24} className="gx-col-full">
            <IconWithTextCard icon="orders" iconColor="geekblue" title="2,380" subTitle="Orders this year"/>
            </Col>
            <Col xl={24} lg={12} md={12} sm={24} xs={24} className="gx-col-full">
            <IconWithTextCard icon="revenue-new" iconColor="primary" title="2,380" subTitle="Revenue this year"/>
            </Col>
            <Col xl={24} lg={12} md={12} sm={24} xs={24} className="gx-col-full">
            <IconWithTextCard icon="visits" iconColor="geekblue" title="2,380" subTitle="Visits this year"/>
            </Col>
        </Col>
        <Col xl={12} lg={12} md={12} sm={12} xs={12} className="gx-col-full">
            <IconWithTextCard icon="revenue-new" iconColor="primary" title="2,380" subTitle="Revenue this year"/>
        </Col>
        <Col xl={12} lg={12} md={12} sm={12} xs={12} className="gx-col-full">
            <IconWithTextCard icon="visits" iconColor="geekblue" title="2,380" subTitle="Visits this year"/>
        </Col>
      </Row>
    </Auxiliary>
);
export default Dashboard;