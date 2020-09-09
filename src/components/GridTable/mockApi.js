const data = [];

for (let i=0; i < 50; i++) {
    data.push(
        {
            composedText : {
                type: 'composedText',
                name: "complexe text",
                data: { 
                    title: "composed title 01",
                    ASIN: 123456
                },
                useSort: false,
                fixed: 'left',
            },
            text : {
                type: 'text',
                name: "Simple text",
                data: { 
                    value: "simple title 01"
                },
                useSort: true
            },
            
            date: {
                type: 'date',
                name: "Date",
                data: { 
                    value: "1989/08/06",
                    dateFormat: "YYYY/MM/DD"
                },
                useSort: true,
            },
            select: {
                type: 'select',
                name: "Select",
                data: {
                    values : {
                        1: 'value 01',
                        2: 'value 02'       
                    },
                    defaultValue: 'value 01'
                }
            },
            checkbox: {
                type: 'checkbox',
                name: "Checkbox",
                data: {
                    value :'value 01'       
                },
                useSort: false
            },
            url: {
                type: 'url',
                name: "Url",
                data: {
                    value :'This is link 01'       
                },
                useSort: false
            },
            number: {
                type: 'number',
                name: "Number",
                data: {
                    value :1      
                },
                useSort: true
            },
            rating: {
                type: 'rating',
                name: "Rating",
                data: {
                    value :4     
                },
                useSort: false
            },
            attachment: {
                type: 'attachment',
                name: "Attachment",
                data: {
                    value :4     
                },
                useSort: false
            },
            multipleselect: {
                type: 'multipleselect',
                name: "Multiple Select",
                data: {
                    values : {
                        1: 'value 01',
                        2: 'value 02' ,
                        5: 'value 05'       
                    },
                    defaultValues: ['value 01', 'value 02']    
                },
                useSort: false
            },
            email: {
                type: 'email',
                name: "Email",
                data: {
                    value : 'user@mail.com' ,
                },
                useSort: false
            },
            phone: {
                type: 'phone',
                name: "phone",
                data: {
                    value : '+213569854' ,
                },
                useSort: false
            },
            currency: {
                type: 'currency',
                name: "currency",
                data: {
                    value : '2500',
                    currency: '$'
                },
                useSort: false
            },
            integer: {
                type: 'integer',
                name: "integer",
                data: {
                    value : 2500,
                },
                useSort: false
            },
            double: {
                type: 'double',
                name: "double",
                data: {
                    value : '2500',
                },
                useSort: false
            },
            percentage: {
                type: 'percentage',
                name: "percentage",
                data: {
                    value : '25%',
                },
                useSort: false
            },
            duration: {
                type: 'duration',
                name: "duration",
                data: {
                    value : '13:30:56',
                },
                useSort: false
            },
            autonumber: {
                type: 'autonumber',
                name: "autonumber",
                data: {
                    value : '5689',
                },
                useSort: false
            },
            barcode: {
                type: 'barcode',
                name: "Barcode",
                data: {
                    value : 'ruuoigfdgj',
                },
                useSort: false
            },
            
        }
    )
}

export default data;