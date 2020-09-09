import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

const MultipleSelect = ({values, defaultValues}) => {

const children = [];

    /*for (let i = 10; i < 36; i++) {
        children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
    }*/

    Object.entries(values).map(([key, value]) => {
        children.push(<Option key={key}>{value}</Option>);
    });


    function handleChange(value) {
        console.log(`selected ${value}`);
    }

    return (
        <Select
            mode="multiple"
            allowClear
            style={{ width: '100%' }}
            placeholder="Please select"
            defaultValue={defaultValues}
            onChange={handleChange}
        >
        {children}
        </Select>
    )
}
export default MultipleSelect;