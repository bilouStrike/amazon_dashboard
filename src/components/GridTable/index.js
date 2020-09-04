import React from 'react';
import { Table } from 'antd';
import data from './data';
import columns from './columns';

const GridTable = () => {
    return (
        <Table columns={columns} dataSource={data} />
    );
}

export default GridTable;