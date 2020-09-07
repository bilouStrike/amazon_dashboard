export default [
    {
        text : {
            type: 'text',
            name: "Simple text",
            data: { 
                value: "simple title 01"
            }
        },
        composedText : {
            type: 'composedText',
            name: "complexe text",
            data: { 
                title: "composed title 01",
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
                    1: 'value 01',
                    2: 'value 02'       
                }
            }
        },
        checkbox: {
            type: 'checkbox',
            name: "Checkbox",
            data: {
                value :'value 01'       
            }
        },
    },
    {
        text : {
            type: 'text',
            name: "Simple text",
            data: { 
                value: "simple title 02 02"
            }
        },
        composedText : {
            type: 'composedText',
            name: "complexe text",
            data: { 
                title: "composed title 02",
                ASIN: 98564
            }
        },
        date: {
            type: 'date',
            name: "Date",
            data: { 
                value: "1995/12/15",
                dateFormat: "YYYY/MM/DD"
            }
        },
        select: {
            type: 'select',
            name: "Select",
            data: {
                values : {
                    3: 'value 03',
                    4: 'value 04'       
                }
            }
        },
        checkbox: {
            type: 'checkbox',
            name: "Checkbox",
            data: {
                value :'value 02'       
            }
        },
    },
    
]
