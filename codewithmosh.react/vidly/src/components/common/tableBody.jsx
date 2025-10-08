import React, { Component } from "react";
import _ from "lodash";

class TableBody extends Component {

    renderCell = (item, column) => {
        if (column.createEle) return column.createEle(item);
        return _.get(item, column.columnPath);
    }

    render() {
        const { data, columns } = this.props;
        return (
            <tbody>
                {data.map(item => (
                    <tr key={item._id} id={item._id}>
                        {columns.map(column =>
                            <td key={column.columnPath}>{this.renderCell(item, column)}</td>)
                        }
                    </tr>
                ))}
            </tbody>
        );
    }
}

export default TableBody;