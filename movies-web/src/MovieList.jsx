import React, { useState, useEffect } from 'react';
const URL = 'http://localhost:3000/api/movies'


//funcion para ver la lista de peliculas
export function MovieList() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(URL, { method: 'GET', mode: 'cors', headers: { 'Content-Type': 'application/json', } });
                const data = await response.json();
                setMovies(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (

        <div id="container">
            {movies.map((movie) => (
                <div className="item" key={movie.Id} data-id={movie.Id} data-title={movie.Title} data-director={movie.Director} data-year={movie.Year} data-rating={movie.Rating} data-imgurl={movie.ImgURL}>
                    <img src={movie.ImgURL} alt={movie.Title} />
                    <h2>{movie.Title}</h2>
                    <small>{movie.Director}</small>
                </div>
            ))}
        </div>
    );
}

export default MovieList;
