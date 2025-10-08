import React, { Component } from 'react';
import Like from './common/like';
import Table from './common/table';

class MoviesTable extends Component {
    getColumns = () => {
        const { likedMovies, onLikeToggle } = this.props;
        return [
            { columnPath: "title", name: "Title" },
            { columnPath: "genre.name", name: "Genre" },
            { columnPath: "numberInStock", name: "Stock" },
            { columnPath: "dailyRentalRate", name: "Rate" },
            { 
                columnPath: "like", 
                name: "", 
                createEle: item => (
                    <Like 
                        isLiked={likedMovies.has(item._id)}
                        onToggle={() => onLikeToggle(item._id)}
                    />
                ) 
            },
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
    };

    render() {
        const { movies, sortConfig, onSort } = this.props;
        return (
            <Table 
                columns = {this.getColumns()}
                data = {movies}
                onSort = {onSort}
                sortConfig = {sortConfig}
            />
        );
    }
}

export default MoviesTable;
