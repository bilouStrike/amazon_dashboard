import React from 'react';

const PhoneData = ({value}) => {
    return (
        <a href={`tel:${value}`}> {value} </a>
    )
};
export default PhoneData;