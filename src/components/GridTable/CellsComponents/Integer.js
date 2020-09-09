import React from 'react';

const IntegerData = ({value}) => {

    return (
        <span> { Number.isInteger(value) ? value : '###' } </span>
    )
};
export default IntegerData;