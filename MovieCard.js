import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie, onAddToFavourites }) => {
  return (
    <div className="card">
      <img src={movie.Poster} alt={movie.Title} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{movie.Title}</h5>
        <p className="card-text">{movie.Year}</p>
        <Link to={`/movie/${movie.imdbID}`} className="btn btn-primary">
          View Details
        </Link>
        <button
          onClick={() => onAddToFavourites(movie)}
          className="btn btn-warning mt-2"
        >
          Add to Favourites
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
