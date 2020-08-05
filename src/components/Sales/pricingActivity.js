import React from 'react';
import { Table, Col, Row, DatePicker, Select, Card } from 'antd';
import Auxiliary from 'util/Auxiliary';
import moment from "moment";

const RangePicker = DatePicker.RangePicker;

function onChange(dates, dateStrings) {
  console.log('From: ', dates[0], ', to: ', dates[1]);
  console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
}

const { Option } = Select;
const columns = [
    {
        title: 'SKU',
        dataIndex: 'sku',
        key: 'sku'
    },
    {
        title: 'Listing',
        dataIndex: 'listing',
        key: 'listing'
    },
    {
        title: 'Marketplace ID',
        dataIndex: 'marketplace_id',
        key: 'marketplace_id'
    },
    {
        title: 'Old Price',
        dataIndex: 'old_price',
        key: 'old_price'
    },
    {
        title: 'New Price',
        dataIndex: 'new_price',
        key: 'new_price'
    },
    {
        title: 'Change',
        dataIndex: 'change',
        key: 'change'
    },
    {
        title: 'Date',
        dataIndex: 'date',
        key: 'date',
    }
  ];
  
  const data = [
    {
        key: 1,
        sku: 1033392714,
        listing: '9-Jl8kmrBe',
        marketplace_id: 'fd1546',
        old_price: '$21.00',
        new_price: '$27.00',
        change: '1',
        date: 'June 8th 2020 9:18:47 PM',
    },
    {
        key: 2,
        sku: 1033392714,
        listing: '9-Jl8kmrBe',
        marketplace_id: 'fd1546',
        old_price: '$21.00',
        new_price: '$27.00',
        change: '1',
        date: 'June 8th 2020 9:18:47 PM',
    },
    {
        key: 3,
        sku: 1033392714,
        listing: '9-Jl8kmrBe',
        marketplace_id: 'fd1546',
        old_price: '$21.00',
        new_price: '$27.00',
        change: '1',
        date: 'June 8th 2020 9:18:47 PM',
    },
    {
        key: 4,
        sku: 1033392714,
        listing: '9-Jl8kmrBe',
        marketplace_id: 'fd1546',
        old_price: '$21.00',
        new_price: '$27.00',
        change: '1',
        date: 'June 8th 2020 9:18:47 PM',
    }
  ];
 

const PricingActivity = () => {
    
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
                            <h2> Pricing Activity </h2>
                        </Col>
                        <Col xl={4} lg={4} md={4} sm={24} xs={24}>
                            <RangePicker className="gx-mb-3 gx-w-100" xl={6} lg={6} md={6} sm={12} xs={24}
                                ranges={{Today: [moment(), moment()], 'This Month': [moment(), moment().endOf('month')]}}
                                onChange={onChange}
                            />
                        </Col>
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

export default PricingActivity;