import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService';
import Like from './common/like';
import Pagination from './common/pagination';
import ListGroup from './common/listGroup';

class MovieTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: [],
            pageSize: 4,
            currentPage: 1,
            genres: []
        };
    }

    componentDidMount() {
        const movies = getMovies();
        const genres = getGenres();
        this.setState({ genres, movies }, () => {
            this.props.onUpdate(this.getFilteredMovies().length);
        });
    }

    render() {
        const { length: totalMovies } = this.state.movies;
        const { pageSize, currentPage } = this.state;
        if (totalMovies === 0) return null;

        const filteredMovies = this.getFilteredMovies();
        return (
            <div className="row">
                <div className="col-3">
                    <ListGroup
                        items={this.state.genres}
                        selectedItem={this.state.selectedGenre}
                        onItemSelect={this.handleGenreSelect}
                    />
                </div>
                <div className="col">
                    <table className="table table-hover">
                        {this.getTableHeader()}
                        {this.getTableBody(filteredMovies)}
                    </table>
                    <Pagination
                        itemsCount={filteredMovies.length}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChange={this.handlePageChange}
                    />
                </div>
            </div>
        );
    }

    getTableBody(filteredMovies) {
        const { pageSize, currentPage } = this.state;
        return <tbody>
            {this.getPaginatedMovieList(filteredMovies, currentPage, pageSize)}
        </tbody>;
    }

    getTableHeader() {
        return <thead>
            <tr>
                <th className="w-25">Title</th>
                <th className="w-25">Genre</th>
                <th className="w-10">Stock</th>
                <th className="w-10">Rate</th>
                <th></th>
                <th></th>
            </tr>
        </thead>;
    }

    // Add this helper in the class
    getFilteredMovies(movies = this.state.movies, selectedGenre = this.state.selectedGenre) {
        return selectedGenre ? movies.filter(m => m.genre._id === selectedGenre._id) : movies;
    }


    // Improve handleDelete
    handleDelete(movieId) {
        const { movies, selectedGenre, pageSize, currentPage } = this.state;

        const updatedMovies = movies.filter(m => m._id !== movieId);
        const filteredAfter = this.getFilteredMovies(updatedMovies, selectedGenre);

        const totalPagesAfter = Math.ceil(filteredAfter.length / pageSize);
        const newCurrentPage = Math.min(currentPage, Math.max(1, totalPagesAfter));

        this.setState(
            { movies: updatedMovies, currentPage: newCurrentPage },
            () => this.props.onUpdate(this.getFilteredMovies().length)
        );
    }

    handlePageChange = page => {
        this.setState({ currentPage: page });
    }

    handleGenreSelect = genre => {
        this.setState({ selectedGenre: genre, currentPage: 1 }, () => {
            this.props.onUpdate(this.getFilteredMovies().length);
        });
    }

    getPaginatedMovieList(movies, currentPage, pageSize) {
        const startInd = (currentPage - 1) * pageSize;
        const endInd = startInd + pageSize;

        return movies.slice(startInd, endInd).map(movie => {
            return (
                <tr key={movie._id}>
                    <td className="w-25 ">{movie.title}</td>
                    <td className="w-25">{movie.genre.name}</td>
                    <td className="w-10">{movie.numberInStock}</td>
                    <td className="w-10">{movie.dailyRentalRate}</td>
                    <td> <Like /> </td>
                    <td>
                        <button className="btn btn-danger btn-lg" onClick={() => this.handleDelete(movie._id)}>
                            Delete
                        </button>
                    </td>
                </tr>
            );
        });
    }

    getMovieList() {
        return this.state.movies.map(movie => {
            return (
                <tr key={movie._id}>
                    <td className="w-25 ">{movie.title}</td>
                    <td className="w-25">{movie.genre.name}</td>
                    <td className="w-10">{movie.numberInStock}</td>
                    <td className="w-10">{movie.dailyRentalRate}</td>
                    <td> <Like /> </td>
                    <td>
                        <button className="btn btn-danger btn-lg" onClick={() => this.handleDelete(movie._id)}>
                            Delete
                        </button>
                    </td>
                </tr>
            );
        });
    }

}

export default MovieTable;