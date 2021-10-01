import React from 'react';
import DataTableRulesLinkAction from '../DataTableRulesLinkAction'

export const DataTableRow = ({row}) => {
  return ( 
    <tr>
        <td>{row.name}</td>
        <td>{row.mode}</td>
        <td>
            <DataTableRulesLinkAction redirectTo={''} />
        </td>
    </tr>
    );
};

export default DataTableRow;
