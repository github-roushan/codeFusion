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
                {/* {this.getTableBody(movies)} */}
                <TableBody data={movies} columns={this.columns} onDelete={this.props.onDelete} />
            </table>
        );
    }

    getTableHeader = () => {
        return (
            <thead>
                <tr>
                    <th onClick={() => this.raiseSort('title')} className="w-25">Title</th>
                    <th onClick={() => this.raiseSort('genre.name')} className="w-25">Genre</th>
                    <th onClick={() => this.raiseSort('numberInStock')} className="w-10">Stock</th>
                    <th onClick={() => this.raiseSort('dailyRentalRate')} className="w-10">Rate</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
        );
    };

    getTableBody = movies => {
        const { onDelete } = this.props;
        return (
            <tbody>
                {movies.map(movie => (
                    <tr key={movie._id}>
                        <td className="w-25 ">{movie.title}</td>
                        <td className="w-25">{movie.genre.name}</td>
                        <td className="w-10">{movie.numberInStock}</td>
                        <td className="w-10">{movie.dailyRentalRate}</td>
                        <td> <Like /> </td>
                        <td>
                            <button className="btn btn-danger btn-lg" onClick={() => onDelete(movie._id)}>
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        );
    }
}

export default MoviesTable;
