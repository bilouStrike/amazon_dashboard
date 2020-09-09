import React, { useState } from 'react';
import { Rate } from 'antd';

const RatingData = ({value}) => {

    const [rate, setRating] = useState(value);
    console.log(rate)
    return (
        <Rate value={rate} onChange={setRating}/>
    )
};
export default RatingData;