import React from 'react';
import moment from 'moment';

const DurationData = ({value}) => {
    const duration = moment.utc(moment.duration(value, "seconds").asMilliseconds()).format("HH:mm");
    return (
       <span> {  duration } </span>
    )
};
export default DurationData;