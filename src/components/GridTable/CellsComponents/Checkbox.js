import React from 'react';
import { Checkbox } from 'antd';

const CheckboxData = (value) => 
    <Checkbox onChange={() => console.log('checked')}>
        {value}
    </Checkbox>
export default CheckboxData;