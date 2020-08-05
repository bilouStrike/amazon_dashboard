import React from 'react';
import { Table, Col, Row } from 'antd';
import Auxiliary from 'util/Auxiliary';
import AddStrategy from './addStrategy';

const columns = [
    {
        title: 'Marketplace',
        dataIndex: 'marketplace',
        key: 'marketplace'
    },
    {
        title: 'Strategy Name',
        dataIndex: 'strategy_name',
        key: 'strategy_name'
    },
    {
        title: 'Strategy Type',
        dataIndex: 'strategy_type',
        key: 'strategy_type'
    },
    {
        title: 'Minimum Price',
        dataIndex: 'minimum_price',
        key: 'minimum_price'
    },
    {
        title: 'Maximum Price',
        dataIndex: 'maximum_price',
        key: 'maximum_price'
    },
    {
        title: 'Listings Asigned',
        dataIndex: 'listings_asigned',
        key: 'listings_asigned'
    },
  ];
  
  const data = [
    {
        key: 1,
        marketplace: 'Amazon US',
        strategy_name: 'r1W3CaqjS',
        strategy_type: 'Custom Amazon Strate',
        minimum_price: '13.00%',
        maximum_price: '200.00%',
        listings_asigned: '312 Listings'
    },
    {
        key: 2,
        marketplace: 'Amazon US',
        strategy_name: 'r1W3CaqjS',
        strategy_type: 'Custom Amazon Strate',
        minimum_price: '13.00%',
        maximum_price: '200.00%',
        listings_asigned: '312 Listings'
    },
    {
        key: 3,
        marketplace: 'Amazon US',
        strategy_name: 'r1W3CaqjS',
        strategy_type: 'Custom Amazon Strate',
        minimum_price: '13.00%',
        maximum_price: '200.00%',
        listings_asigned: '312 Listings'
    },
    {
        key: 4,
        marketplace: 'Amazon US',
        strategy_name: 'r1W3CaqjS',
        strategy_type: 'Custom Amazon Strate',
        minimum_price: '13.00%',
        maximum_price: '200.00%',
        listings_asigned: '312 Listings'
    }
  ];
 

const PricingStrategy = () => {
    
    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
          console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
        getCheckboxProps: record => ({
          disabled: record.name === 'Disabled User', // Column configuration not to be checked
          name: record.name,
        }),
    };

    return (
        <Auxiliary>
            <Row>
                <Col xl={24} lg={24} md={24} sm={24} xs={24}>
                    <Row className="amazon-tool-service-page-header">
                        <Col xl={6} lg={6} md={6} sm={24} xs={24}>
                            <h2> Pricing Strategy </h2>
                        </Col>
                        <AddStrategy />
                    </Row>
                    <Table
                        className="gx-table-responsive"
                        columns={columns} 
                        dataSource={data}
                        rowSelection={{
                            type: 'checkbox',
                            ...rowSelection,
                          }}
                    />
                </Col>
            </Row>
        </Auxiliary>
    );
};

export default PricingStrategy;