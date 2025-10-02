import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import Like from './common/like';
import Pagination from './common/pagination';
import { curry } from 'lodash';

class MovieTable extends Component {
    constructor(props){
        super(props)
        this.state = { 
            movies: getMovies(),
            pageSize: 4,
            currentPage: 1
        };
    }

    componentDidMount() {
        this.props.onUpdate(this.state.movies.length);
    }

    handlePageChange = page => {
        this.setState({ currentPage: page });
        // console.log("Moved to page", this.state.currentPage);
    }
    
    render() { 
        const { length: movieCount } = this.state.movies;
        const { pageSize, currentPage } = this.state;
        if (movieCount === 0) return null;
        return (
            <React.Fragment>
            <table className="table table-hover">
                {this.getTableHeader()}
                {this.getTableBody()}
            </table>
            <Pagination
             itemsCount={movieCount} 
             pageSize={pageSize} 
             onPageChange={this.handlePageChange}
             currentPage={currentPage}
            />
            </React.Fragment>
        );
    }
    
    getTableBody() {
        return <tbody>
            {this.getMovieList()}
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
    
    handleDelete(movieId){
        const updatedMovieList = this.state.movies.filter(movie => movie._id !== movieId);
        this.setState({ movies: updatedMovieList }, 
            () => this.props.onUpdate(this.state.movies.length)
        );
    }

    getMovieList() {
        const { pageSize, currentPage } = this.state;
        return this.state.movies.slice((currentPage-1) * pageSize, currentPage * pageSize).map(movie => {
            return (
                <tr key={movie._id}>
                    <td className="w-25 ">{movie.title}</td>
                    <td className="w-25">{movie.genre.name}</td>
                    <td className="w-10">{movie.numberInStock}</td>
                    <td className="w-10">{movie.dailyRentalRate}</td>
                    <td> <Like /> </td>
                    <td>
                        <button className="btn btn-danger btn-lg" onClick={()=>this.handleDelete(movie._id)}>
                            Delete
                        </button>
                    </td>
                </tr>
            );
        });
    }

}
 
export default MovieTable;