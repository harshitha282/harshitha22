import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MovieList.css';

const MovieList = ({ toggleFavorite }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  
  const fetchMovies = async (query) => {
    if (!query) return;
    const response = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=b9feda3a`);
    const data = await response.json();
    setMovies(data.Search || []);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    fetchMovies(e.target.value);
  };

  return (
    <div className="movie-list">
      <h1>Search Movies</h1>
      <input 
        type="text" 
        value={searchQuery} 
        onChange={handleSearchChange} 
        placeholder="Search for a movie..." 
      />
      <div className="movie-cards">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div className="card" key={movie.imdbID}>
              <img src={movie.Poster} alt={movie.Title} />
              <div className="card-body">
                <h2>{movie.Title}</h2>
                <button onClick={() => toggleFavorite(movie)}>Toggle Favorite</button>
                <Link to={`/movie/${movie.imdbID}`}>More Details</Link>
              </div>
            </div>
          ))
        ) : (
          <p>No movies found. Please try another search.</p>
        )}
      </div>
    </div>
  );
};

export default MovieList;
