
import React from 'react';
import RenderData from './CellsComponents/index';
import amazonSorter from './sorter';

// Build comluns
const buildColumns = (data) => {
    let columns = [];

    Object.entries(data[0]).map(([key, value]) => {
      //let sort = value.useSort ? amazonSorter[key] : null;
      //let fixed = value.fixed ? value.fixed : null;

      columns.push({
        title: value.name,
        dataIndex: key,
        key,
        render: (value) => <RenderData {...value}/>,
      });
    });

  return columns;
}

export default buildColumns;
