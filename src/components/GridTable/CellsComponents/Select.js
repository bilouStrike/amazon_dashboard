import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

const SelectData = ({ values }) => {
    const optionsData = Object.entries(values).map(([key, value]) => 
        <Option value={key}>{value}</Option>
    );
    return (
        <Select defaultValue="value01"  size="small">
            {optionsData}
        </Select>
    );
}

export default SelectData;