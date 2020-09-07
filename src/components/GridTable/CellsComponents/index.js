import React from 'react';
import TextData from './Text';
import DateData from './Date';
import ComposedText from './ComposedText';
import CheckboxData from './Checkbox';
import UrlData from './Url';
import SelectData from './Select';


const RenderData = ({ type, data }) => {
    let component;
    switch(type) {
        case 'text':
            component = <TextData {...data}/>
        break; 
        case 'composedText':
            component = <ComposedText {...data}/>
        break;
        case 'date':
            component = <DateData {...data}/>
        break;
        case 'url':
            component = <UrlData {...data}/>
        break;
        case 'select':
            component = <SelectData {...data}/>
        break;
        case 'checkbox':
            component = <CheckboxData {...data}/>
        break;
        default:
            component = <></>
    }
    return component;
}
export default RenderData;