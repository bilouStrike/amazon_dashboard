import { uniqueKey } from 'helpers';

// build rows
const buildRows = ( data ) => {
    let rows = [];
    data.map((row) => {
        const uniqKey = uniqueKey(); 
        let cellOfRow = { key : uniqKey };
        Object.entries(row).map(([key, value]) => {
            cellOfRow[key] = value
        });
        rows.push(cellOfRow);
    });
    return rows;
}

export default buildRows;

/*
{
    text : {
        type: 'text',
        name: "Simple text",
        data: { 
            value: "title 01"
        }
    },
    composedText : {
        type: 'composedText',
        name: "complexe text",
        data: { 
            title: "title1",
            ASIN: 123456
        }
    },
    date: {
        type: 'date',
        name: "Date",
        data: { 
            value: "1989/08/06",
            dateFormat: "YYYY/MM/DD"
        }
    },
    select: {
        type: 'select',
        name: "Select",
        data: {
            values : {
                1: 'value01',
                2: 'value02'       
            }
        }
    },
    checkbox: {
        type: 'checkbox',
        name: "Checkbox",
        data: {
            value :'value'       
        }
    },
}
*/