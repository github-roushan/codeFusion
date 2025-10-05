import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService';
import Pagination from './common/pagination';
import ListGroup from './common/listGroup';
import MoviesTable from './moviesTable';

class Movies extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: [],
            pageSize: 4,
            currentPage: 1,
            genres: [],
            sortConfig: {columnPath: "title", order: "asc"}
        };
    }

    componentDidMount() {
        const movies = getMovies();
        const genres = [{name: "All Genres"}, ...getGenres()];
        this.setState({ genres, movies }, () => {
            this.props.onUpdate(this.getFilteredMovies().length);
        });
    }

    render() {
        const { length: totalMovies } = this.state.movies;
        const { pageSize, currentPage, sortConfig } = this.state;
        if (totalMovies === 0) return null;

        const filteredMovies = this.getFilteredMovies();
        const sortedMovies = this.getSortedMovies(filteredMovies);
        const finalMoviesList = this.getPaginatedMovies(sortedMovies);

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
                    <MoviesTable 
                        movies={finalMoviesList}
                        sortConfig={sortConfig}
                        onDelete={this.handleDelete}
                        onSort={this.handleSort}
                    />
                    <Pagination
                        itemsCount={sortedMovies.length}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChange={this.handlePageChange}
                    />
                </div>
            </div>
        );
    }

    
    getFilteredMovies(movies = this.state.movies, selectedGenre = this.state.selectedGenre) {
        return selectedGenre && selectedGenre._id ? movies.filter(m => m.genre._id === selectedGenre._id) : movies;
    }

    getSortedMovies(movieList) {
        const { sortConfig } = this.state;

        const sortedMovies = [...movieList].sort((a, b) => {
            let comparison = 0;  
            if (sortConfig.columnPath === "title") {
                comparison = a.title.localeCompare(b.title);
            } else if (sortConfig.columnPath === "genre.name") {
                comparison = a.genre.name.localeCompare(b.genre.name);
            } else {
                comparison = a[sortConfig.columnPath] - b[sortConfig.columnPath];
            }
            return sortConfig.order === "desc" ? -comparison : comparison;
        });
    
        return sortedMovies;
    }
    

    getPaginatedMovies(movies) {
        const {currentPage, pageSize} = this.state;
        const startInd = (currentPage - 1) * pageSize;
        const endInd = startInd + pageSize;

        return movies.slice(startInd, endInd);
    }

    handleDelete = (movieId) => {
        const { movies, selectedGenre, pageSize, currentPage } = this.state;

        const updatedMovies = movies.filter(m => m._id !== movieId);
        const filteredAfter = this.getFilteredMovies(updatedMovies, selectedGenre);

        const totalPagesAfter = Math.ceil(filteredAfter.length / pageSize);
        const newCurrentPage = Math.min(currentPage, Math.max(1, totalPagesAfter));

        this.setState(
            { movies: updatedMovies, currentPage: newCurrentPage },
            () => this.props.onUpdate(this.getFilteredMovies().length)
        );
    };

    handlePageChange = page => {
        this.setState({ currentPage: page });
    };

    handleGenreSelect = genre => {
        this.setState({ selectedGenre: genre, currentPage: 1 }, () => {
            this.props.onUpdate(this.getFilteredMovies().length);
        });
    };

    handleSort = sortConfig => {
        this.setState({ sortConfig });
    }
}

export default Movies;