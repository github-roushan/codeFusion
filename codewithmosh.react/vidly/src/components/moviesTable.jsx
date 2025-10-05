import React from 'react';
import Like from './common/like';

const MoviesTable = (props) => {
    const getTableHeader = () => {
        return (
            <thead>
                <tr>
                    <th className="w-25">Title</th>
                    <th className="w-25">Genre</th>
                    <th className="w-10">Stock</th>
                    <th className="w-10">Rate</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
        );
    };

    const getTableBody = movies => {
        const {onDelete} = props;
        console.log("In MoviesTable onDelete", onDelete);
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

    return (
        <table className="table table-hover">
            {getTableHeader()}
            {getTableBody(props.movies)}
        </table>
    );
};

export default MoviesTable;
