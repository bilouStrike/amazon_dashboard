import React from 'react';

const CurrencyData = ({value, currency}) => {
    return (
        <span> {value}{currency} </span>
    )
};
export default CurrencyData;