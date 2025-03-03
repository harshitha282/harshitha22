import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetails } from "../api";

const MoviePage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getMovieDetails = async () => {
      const data = await fetchMovieDetails(id);
      setMovie(data);
    };
    getMovieDetails();
  }, [id]);

  return (
    <div>
      {movie ? (
        <div className="card">
          <img src={movie.Poster} alt={movie.Title} className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">{movie.Title}</h5>
            <p className="card-text">{movie.Plot}</p>
            <p><strong>Year:</strong> {movie.Year}</p>
            <p><strong>Director:</strong> {movie.Director}</p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MoviePage;
