import React, { useState, useEffect } from "react";
import EditMovie from "./modifymodal.jsx";
import NewMovie from "./newMovie.jsx";

import { getMovies } from "../../../services/fetch.js";
import DeleteMovieBtn from "./deletemovie.jsx";

//funcion para ver la lista de peliculas
export function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchmovies();
  }, []);

  const fetchmovies = async () => {
    try {
      const moviesData = await getMovies();
      setMovies(moviesData);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  const handleUpdateMovies = async () => {
    await fetchmovies();
  };

  return (
    <>
      <div>
        <NewMovie onUpdateMovies={handleUpdateMovies} />
      </div>
      <br />
      <div id="container">
        {movies.map((movie) => (
          <div
            className="item"
            key={movie.Id}
            data-id={movie.Id}
            data-title={movie.Title}
            data-director={movie.Director}
            data-year={movie.Year}
            data-rating={movie.Rating}
            data-imgurl={movie.ImgURL}
          >
            <img src={movie.ImgURL} alt={movie.Title} />
            <h2>{movie.Title}</h2>
            <small>{movie.Director}</small>
            <br />
            <br />
            <div className="button-container">
              <DeleteMovieBtn
                Id={movie.Id}
                onUpdateMovies={handleUpdateMovies}
              />
              <EditMovie item={movie} onUpdateMovies={handleUpdateMovies} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default MovieList;
