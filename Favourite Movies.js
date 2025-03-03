import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";

const FavouriteMovies = () => {
  const [favourites, setFavourites] = useState(
    JSON.parse(localStorage.getItem("favourites")) || []
  );

  const handleRemoveFromFavourites = (movie) => {
    const updatedFavourites = favourites.filter((m) => m.imdbID !== movie.imdbID);
    setFavourites(updatedFavourites);
    localStorage.setItem("favourites", JSON.stringify(updatedFavourites));
  };

  return (
    <div>
      <h2>My Favourite Movies</h2>
      <div className="row mt-3">
        {favourites.length > 0 ? (
          favourites.map((movie) => (
            <div key={movie.imdbID} className="col-12 col-md-4">
              <div className="card">
                <img src={movie.Poster} alt={movie.Title} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{movie.Title}</h5>
                  <button
                    onClick={() => handleRemoveFromFavourites(movie)}
                    className="btn btn-danger"
                  >
                    Remove from Favourites
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No favourite movies yet!</p>
        )}
      </div>
    </div>
  );
};

export default FavouriteMovies;
