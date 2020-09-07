
import React from 'react';
import RenderData from './CellsComponents/index';

// Build comluns
const buildColumns = (data) => {
    let columns = [];
    Object.entries(data[0]).map(([key, value]) => {
      let sort = key == 'text' ? `(a, b) =>  a.text.data.value.length - b.text.data.value.length` : null;
      columns.push({
        title: value.name,
        dataIndex: key,
        key,
        render: (value) => <RenderData {...value}/>,
        sorter: eval(sort)
      });
    });

    console.log(columns);
  return columns;
}

export default buildColumns;

/*export default [
    {
      title: 'Simple Text',
      dataIndex: 'text',
      key: 'text',
      render: text => <RenderData {...text}/>,
    },
    {
      title:'composed text (object)',
      dataIndex: 'composedText',
      key: 'composedText',
      render: data => <RenderData {...data}/>
    },
    {
      title: 'Url',
      dataIndex: 'url',
      key: 'url',
      render: url => <RenderData type='url' data={url}/>
    },
    {
      title: 'Checkbox',
      dataIndex: 'checkbox',
      key: 'checkbox',
      render: data => <RenderData type='text' data={data}/>
    },
    {
        title: 'Select',
        dataIndex: 'select',
        key: 'select',
        render: (data) => <RenderData type='text' data={data}/>
    },
    {
        title: 'Date',
        dataIndex: 'date',
        key: 'date',
        render: date => <RenderData type='date' data={date}/>
    },
];*/