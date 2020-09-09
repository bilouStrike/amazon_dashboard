import React from 'react';
import { Table } from 'antd';
import mockData from './mockApi';

import buildColumns from './columns';
import buildRows from './rows';

const GridTable = () => {

    const columns = buildColumns(mockData);
    const data =  buildRows(mockData);

    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
          console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        }
    };

    return (
        <Table 
            columns={columns} 
            dataSource={data} 
            bordered
            scroll={{ x: 'max-content' }}
            style={{marginTop:'50px'}}
            pagination={false}
            />
    );
}

export default GridTable;