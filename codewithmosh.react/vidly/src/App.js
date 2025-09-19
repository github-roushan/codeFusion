import MovieTable from './components/movieTable';
import React, {useState} from 'react';

function App() {
  const [movieCount, setMovieCount] = useState(0);

  const handleMovieUpdate = (totalMovies) => {
    setMovieCount(totalMovies);
  };

  return (
    <React.Fragment>
    <main className="container">
      {movieCount === 0 && <h1> There are no movies in the Database </h1>}
      {movieCount !==0 && <h1>Showing {movieCount} Movies in Database</h1> } 
    </main>
    <MovieTable onUpdate={handleMovieUpdate}/>
    </React.Fragment>
  );
}

export default App;
