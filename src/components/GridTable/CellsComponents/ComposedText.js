import React from 'react';

const ComposedText = ({ data }) => {
    const displayData = Object.entries(data).map(([key, value]) => 
           <h5 key={key}>{key} : {value} </h5>
        );
        return (
            displayData
        )
    }
export default ComposedText;