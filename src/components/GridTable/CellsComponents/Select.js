import React from 'react';
import { Select } from 'antd';
import { uniqueKey } from 'helpers';

const { Option } = Select;

const SelectData = ({ values, defaultValue }) => {
    const optionsData = Object.entries(values).map(([key, value]) => {
        const uniqKey = uniqueKey();
        return (
            <Option key={uniqKey} value={key}>{value}</Option>
        )
    });

    return (
        <Select defaultValue={defaultValue} size="small">
            {optionsData}
        </Select>
    );
}

export default SelectData;