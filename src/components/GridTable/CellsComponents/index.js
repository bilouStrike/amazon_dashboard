import React from 'react';
import TextData from './Text';
import DateData from './Date';
import ComposedText from './ComposedText';
import CheckboxData from './Checkbox';
import UrlData from './Url';
import SelectData from './Select';
import NumberData from './Number';
import RatingData from './RatingData';
import AttachmentData from './Attachment';
import Multipleselect from './MultipleSelect';
import EmailData from './Email';
import PhoneData from './Phone';
import CurrencyData from './Currency';
import IntegerData from './Integer';
import DoubleData from './Double';
import ButtonData from './Button';
import PercentageData from './Percentage';
import DurationData from './Duration';
import AutonumberData from './Autonumber';
import BarcodeData from './Barcode';

const RenderData = ({ type, data }) => {
    let component;

    const components = {
        text: <TextData {...data}/>,
        composedText: <ComposedText {...data}/>,
        date: <DateData {...data}/>,
        url: <UrlData {...data}/>,
        select: <SelectData {...data}/>,
        checkbox: <CheckboxData {...data}/>,
        number: <NumberData {...data}/>,
        rating: <RatingData {...data}/>,
        attachment: <AttachmentData {...data}/>,
        multipleselect: <Multipleselect {...data}/>,
        email: <EmailData {...data}/>,
        phone: <PhoneData {...data}/>,
        currency: <CurrencyData {...data}/>,
        integer: <IntegerData {...data}/>,
        double: <DoubleData {...data}/>,
        button: <ButtonData {...data}/>,
        percentage: <PercentageData {...data}/>,
        duration: <DurationData {...data}/>,
        autonumber: <AutonumberData {...data} />,
        barcode: <BarcodeData {...data} />
    }

    component = components[type];
    return component;
}
export default RenderData;