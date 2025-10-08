import React from 'react';
import TableHeader from './tableHeader';
import TableBody from './tableBody';

const Table = ({ columns, sortConfig, onSort, data }) => {
    return (
        <table className="table table-hover">
            <TableHeader columns={columns} sortConfig={sortConfig} onSort={onSort} />
            <TableBody data={data} columns={columns} />
        </table>
    );
}
 
export default Table;