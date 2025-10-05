import React, { Component } from 'react';


// columns: array
// sortConfig: Object
// onSort: Function
class TableHeader extends Component {

    raiseSort = columnPath => {
        const { sortConfig } = this.props;
        if (sortConfig.columnPath === columnPath) {
            sortConfig.order = sortConfig.order === "asc" ? "desc" : "asc";
        } else {
            sortConfig.columnPath = columnPath;
            sortConfig.order = "asc";
        }
        this.props.onSort(sortConfig);
    }

    render() {
        return (
            <thead>
                <tr>
                    {this.props.columns.map(column => (
                        <th
                            key={column.columnPath}
                            onClick={() => this.raiseSort(column.columnPath)}
                        >
                            {column.name}
                        </th>
                    ))}
                </tr>
            </thead>
        );
    }
}

export default TableHeader;