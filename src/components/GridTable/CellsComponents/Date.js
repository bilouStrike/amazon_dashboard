import React from 'react';
import moment from 'moment';
import { DatePicker } from 'antd';

const DateData = ({ value, dateFormat }) => {
    return (
    <DatePicker defaultValue={moment(value, dateFormat)} format={dateFormat} />
)};
export default DateData;