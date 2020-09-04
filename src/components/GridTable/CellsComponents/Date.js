import React from 'react';
import moment from 'moment';
import { DatePicker } from 'antd';
const dateFormat = 'YYYY/MM/DD';

const DateData = ({ date }) => (
    <DatePicker defaultValue={moment(date, dateFormat)} format={dateFormat} />
);
export default DateData;