import React from 'react';

const DoubleData = ({value}) => {
    return (
        <span style={{border: '1px solid red'}} onClick={() => { alert('editable') }}> { Number.isInteger(value) ? value : '###' } </span>
    )
};
export default DoubleData;