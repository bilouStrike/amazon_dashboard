import React from 'react';

const ComposedText = (props) => {
    const displayData = Object.entries(props).map(([key, value]) => 
           <h5 key={key}>{key} : {value} </h5>
        );
        return (
            displayData
        )
    }
export default ComposedText;