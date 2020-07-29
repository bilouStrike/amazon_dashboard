import React from 'react';
import { Table, Col, Row, Switch, Select, Tag } from 'antd';
import Auxiliary from 'util/Auxiliary';
import AddMarketplace from './addMarketplace';
import {
    InfoCircleFilled,
   } from '@ant-design/icons';
const { Option } = Select;
const columns = [
    {
        title: 'Marketplace',
        dataIndex: 'marketplace',
        key: 'marketplace'
    },
    {
        title: 'SKU',
        dataIndex: 'sku',
        key: 'sku'
    },
    {
        title: 'Repricing',
        dataIndex: 'repricing',
        key: 'repricing',
        render: () => <Switch size="small" defaultChecked />
    },
    {
        title: 'Listing Title',
        dataIndex: 'listing_title',
        key: 'listing_title'
    },
    {
        title: 'Strategy',
        dataIndex: 'strategy',
        key: 'strategy',
        render: () => <Select defaultValue="FBM" size="small">
            <Option value="FBM">FBM</Option>
            <Option value="FBM">FBM</Option>
        </Select>
    },
    {
        title: 'Buy Box',
        dataIndex: 'buy_box',
        key: 'buy_box'
    },
    {
        title: 'Your Price',
        dataIndex: 'your_price',
        key: 'your_price'
    },
    {
        title: 'Pos.',
        dataIndex: 'pos',
        key: 'pos'
    },
    {
        title: 'Cost',
        dataIndex: 'cost',
        key: 'cost',
        render: () => <Tag>$17.00</Tag>
    },
    {
        title: 'Min Price',
        dataIndex: 'min_price',
        key: 'min_price',
        render: () => <Tag icon={<InfoCircleFilled />}> $27.00 </Tag>
    },
    {
        title: 'Max Price',
        dataIndex: 'max_price',
        key: 'max_price',
        render: () => <Tag>$17.00</Tag>
    },
  ];
  
  const data = [
    {
        key: 1,
        marketplace: 'Amazon US',
        sku: 1033392714,
        repricing: 'reprice',
        listing_title: 'Crayola 36-Count Washable Sidewalk Chalk',
        strategy: '',
        buy_box: '$21.00',
        your_price: '$27.00',
        pos: '1',
        cost: '',
        min_price: '',
        max_price: ''
    },
    {
        key: 2,
        marketplace: 'Amazon US',
        sku: 1033392714,
        repricing: 'reprice',
        listing_title: 'Crayola 36-Count Washable Sidewalk Chalk',
        strategy: '',
        buy_box: '$21.00',
        your_price: '$27.00',
        pos: '1',
        cost: '',
        min_price: '',
        max_price: ''
    },
    {
        key: 3,
        marketplace: 'Amazon US',
        sku: 1033392714,
        repricing: 'reprice',
        listing_title: 'Crayola 36-Count Washable Sidewalk Chalk',
        strategy: '',
        buy_box: '$21.00',
        your_price: '$27.00',
        pos: '1',
        cost: '',
        min_price: '',
        max_price: ''
    },
    {
        key: 4,
        marketplace: 'Amazon US',
        sku: 1033392714,
        repricing: 'reprice',
        listing_title: 'Crayola 36-Count Washable Sidewalk Chalk',
        strategy: '',
        buy_box: '$21.00',
        your_price: '$27.00',
        pos: '1',
        cost: '',
        min_price: '',
        max_price: ''
    }
  ];
 

const MarketPlaces = () => {
    
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
                    <div className="amazon-tool-service-page-header">
                        <h2> Marketplaces </h2>
                        <AddMarketplace />
                    </div>
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

export default MarketPlaces;