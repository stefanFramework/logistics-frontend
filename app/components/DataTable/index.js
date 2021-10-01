import React from 'react';
import DataTableRow from '../DataTableRow';

export const DataTable = ({heading, data}) => {
  return (
    <table style={{ width: 500}}>
      <thead>
        <tr>
          {heading.map(head => (
            <th>{head}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map(element => (
          <DataTableRow row={element} />
        ))}
      </tbody>
    </table>
  );
}

export default DataTable;
