import React from 'react';
import { Table } from 'antd';
import mockData from './mockApi';

import buildColumns from './columns';
import buildRows from './rows';

const GridTable = () => {

    const columns = buildColumns(mockData);
    const data =  buildRows(mockData);

    return (
        <Table columns={columns} dataSource={data} />
    );
}

export default GridTable;