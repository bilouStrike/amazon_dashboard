
import React from 'react';
import RenderData from './CellsComponents/index';

export default [
    {
      title: 'Simple Text',
      dataIndex: 'text',
      key: 'text',
      render: text => <RenderData type='text' data={text}/>,
    },
    {
      title:'composed text (object)',
      dataIndex: 'composedText',
      key: 'composedText',
      render: data => <RenderData type='composedText' data={data}/>
    },
    {
      title: 'Url',
      dataIndex: 'url',
      key: 'url',
      render: url =><RenderData type='url' data={url}/>
    }/*,
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
    },*/
];