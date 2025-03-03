import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import MovieList from './components/MovieList';
import MoviePage from './components/MoviePage';
import FavouriteMovies from './components/FavouriteMovies';
import './App.css';

const App = () => {
  const [favorites, setFavorites] = useState([]);

  // Load favorites from local storage on initial render
  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(savedFavorites);
  }, []);

  // Add/remove movie from favorites
  const toggleFavorite = (movie) => {
    const updatedFavorites = [...favorites];
    const index = updatedFavorites.findIndex((fav) => fav.imdbID === movie.imdbID);

    if (index === -1) {
      updatedFavorites.push(movie); // Add to favorites
    } else {
      updatedFavorites.splice(index, 1); // Remove from favorites
    }

    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites)); // Save to local storage
  };

  return (
    <Router>
      <div className="container">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/favourites">My Favourites</Link>
        </nav>
        <Routes>
          <Route path="/" element={<MovieList toggleFavorite={toggleFavorite} />} />
          <Route path="/movie/:id" element={<MoviePage />} />
          <Route path="/favourites" element={<FavouriteMovies favorites={favorites} toggleFavorite={toggleFavorite} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
