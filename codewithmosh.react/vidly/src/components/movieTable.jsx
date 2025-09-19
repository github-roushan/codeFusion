import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';

class MovieTable extends Component {
    constructor(props){
        super(props)
        this.state = { movies: getMovies() };
    }

    componentDidMount() {
        this.props.onUpdate(this.state.movies.length);
    }
    
    render() { 
        if (this.state.movies.length === 0) return null;
        return (
            <table className="table table-hover">
                {this.getTableHeader()}
                {this.getTableBody()}
            </table>
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
            </tr>
        </thead>;
    }
    
    handleDelete(movieId){
        const updatedMovieList = this.state.movies.filter(movie => movie._id != movieId);
        this.setState({ movies: updatedMovieList }, 
            () => this.props.onUpdate(this.state.movies.length)
        );
    }

    getMovieList() {
        return this.state.movies.map(movie => {
            return (
                <tr key={movie._id}>
                    <td className="w-25 ">{movie.title}</td>
                    <td className="w-25">{movie.genre.name}</td>
                    <td className="w-10">{movie.numberInStock}</td>
                    <td className="w-10">{movie.dailyRentalRate}</td>
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