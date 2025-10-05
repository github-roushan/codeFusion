import React, {Component} from 'react';
import Like from './common/like';

class MoviesTable extends Component {
    render() {
        const {movies} = this.props;
        return (
            <table className="table table-hover">
                {this.getTableHeader()}
                {this.getTableBody(movies)}
            </table>
        );
    }

    getTableHeader = () => {
        const { onSort } = this.props;
        return (
            <thead>
                <tr>
                    <th onClick={() => onSort('title')} className="w-25">Title</th>
                    <th onClick={() => onSort('genre.name')} className="w-25">Genre</th>
                    <th onClick={() => onSort('numberInStock')} className="w-10">Stock</th>
                    <th onClick={() => onSort('dailyRentalRate')} className="w-10">Rate</th>
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
