import Movies from './components/movies';
import React, {useState} from 'react';

function App() {
  const [movieCount, setMovieCount] = useState(0);

  const handleMovieUpdate = (totalMovies) => {
    setMovieCount(totalMovies);
  };

  return (
    <div style={{ backgroundColor: "#1e1e1e", color: "#d4d4d4", minHeight: "100vh", padding: "20px" }}>
      <main className="container">
        {movieCount === 0 && <h1>There are no movies in the Database</h1>}
        {movieCount !== 0 && <h1>Showing {movieCount} Movies in Database</h1>} 
      </main>
      <Movies onUpdate={handleMovieUpdate} />
    </div>
  );
  
  // return (
  //   <React.Fragment>
  //   <main className="container">
  //     {movieCount === 0 && <h1> There are no movies in the Database </h1>}
  //     {movieCount !==0 && <h1>Showing {movieCount} Movies in Database</h1> } 
  //   </main>
  //   <MovieTable onUpdate={handleMovieUpdate}/>
  //   </React.Fragment>
  // );
}

export default App;
