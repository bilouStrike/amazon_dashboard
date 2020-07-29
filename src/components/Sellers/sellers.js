import React from 'react';
import { Table, Col, Row, Select, Tag } from 'antd';
import Auxiliary from 'util/Auxiliary';

import {
    LineChartOutlined,
   } from '@ant-design/icons';

const columns = [
    {
        title: '#',
        dataIndex: 'N',
        key: 'N'
    },
    {
        title: 'SKU',
        dataIndex: 'sku',
        key: 'sku'
    },
    {
        title: 'Detail',
        dataIndex: 'detail',
        key: 'detail',
        render: () => <Tag style={{ color:"#5e77ff", borderColor:"#5e77ff" }} icon={<LineChartOutlined style={{ fontSize: '14px' }} />}> view item detail </Tag>
    },
    {
        title: 'Revenue',
        dataIndex: 'revenue',
        key: 'revenue'
    },
    {
        title: 'Period Change',
        dataIndex: 'period_change',
        key: 'period_change'
    },
  ];
  
  const data = [
    {
        key: 1,
        N : '1',
        sku: '1033392714',
        detail:'',
        revenue:'$7,559.65',
        period_change: '100%'
    },
    {
        key: 1,
        N : '1',
        sku: '1033392714',
        detail:'',
        revenue:'$7,559.65',
        period_change: '100%'
    },
    {
        key: 1,
        N : '1',
        sku: '1033392714',
        detail:'',
        revenue:'$7,559.65',
        period_change: '100%'
    },
    {
        key: 1,
        N : '1',
        sku: '1033392714',
        detail:'',
        revenue:'$7,559.65',
        period_change: '100%'
    },
    {
        key: 1,
        N : '1',
        sku: '1033392714',
        detail:'',
        revenue:'$7,559.65',
        period_change: '100%'
    },
    {
        key: 1,
        N : '1',
        sku: '1033392714',
        detail:'',
        revenue:'$7,559.65',
        period_change: '100%'
    }
  ];
 

const Sellers = () => {
    
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
                        <h2> Best Sellers </h2>
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

export default Sellers;