import React from 'react';
import TextData from './Text';
import DateData from './Date';
import ComposedText from './ComposedText';
import CheckboxData from './Checkbox';
import UrlData from './Url';

const RenderData = ({ type, data }) => {
    let component = <></>;
    switch(type) {
        case 'text':
            component = <TextData text={data}/>
        break; 
        case 'composedText':
            component = <ComposedText data={data}/>
        break;
        case 'date':
            component = <DateData date={data}/>
        break;
        case 'url':
            component = <UrlData url={data}/>
        break;
    }
    return component;
}
export default RenderData;