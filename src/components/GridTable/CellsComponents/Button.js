import React from 'react';
import { Button } from 'antd';

const ButtonData = ({value}) => {
    return (
        <Button type="primary" size='small'>{value}</Button>
    )
};
export default ButtonData;