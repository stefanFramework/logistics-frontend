import React from 'react';
import DataTableRow from '../DataTableRow';

export const DataTable = ({heading, data}) => {
  return (
    <table style={{ width: '100%', border: '1px solid black', textAlign:'center', borderRadius: '5px', borderCollapse: 'none'}}>
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
