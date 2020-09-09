import React from 'react';

const EmailData = ({value}) => {
    return (
        <a href={`mailto:${value}`}> {value} </a>
    )
};
export default EmailData;