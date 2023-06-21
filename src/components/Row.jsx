import axios from "axios";
import "./Row.css";
import React, { useEffect, useState } from "react";

function Row(props) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(props.fetch).then((response) => {
      setMovies(response.data.results);
    });
  }, [props.fetch]);


  return (
    <div className="row">
      <h3>{props.heading}</h3>
      <div className="row-posters">
        {movies.map((movie) => (
          <img 
            
            key={movie.id}
            className="row-poster"
            src={
              props.img +
              (props.large ? movie.poster_path : movie.backdrop_path)
            }
            alt="movie poster"
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
