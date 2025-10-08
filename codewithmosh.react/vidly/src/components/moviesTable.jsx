import React, { Component } from 'react';
import Like from './common/like';
import TableHeader from './common/tableHeader';
import TableBody from './common/tableBody';

class MoviesTable extends Component {
    columns = [
        { columnPath: "title", name: "Title" },
        { columnPath: "genre.name", name: "Genre" },
        { columnPath: "numberInStock", name: "Stock" },
        { columnPath: "dailyRentalRate", name: "Rate" },
        { columnPath: "like", name: "", createEle: item => <Like /> },
        {
            columnPath: "delete",
            name: "", 
            createEle: movie => (
                <button 
                    className="btn btn-danger btn-lg" 
                    onClick={() => this.props.onDelete(movie._id)}
                >
                    Delete
                </button>
            )
        }
    ];

    raiseSort = columnPath => {
        const { sortConfig } = this.props;
        if (sortConfig.columnPath === columnPath) {
            sortConfig.order = sortConfig.order === "asc" ? "desc" : "asc";
        } else {
            sortConfig.columnPath = columnPath;
            sortConfig.order = "asc";
        }
        console.log("Movies Table", sortConfig);
        this.props.onSort(sortConfig);
    }

    render() {
        const { movies } = this.props;
        return (
            <table className="table table-hover">
                <TableHeader columns={this.columns} sortConfig={this.props.sortConfig} onSort={this.props.onSort} />
                <TableBody data={movies} columns={this.columns} />
            </table>
        );
    }
}

export default MoviesTable;
