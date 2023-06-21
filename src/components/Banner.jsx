import React, { useState, useEffect } from "react";
import axios from "axios";
import Requests from "./Requests";
import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    axios.get(Requests.originals).then((response) => {
      const random = Math.floor(
        Math.random() * (response.data.results.length - 1)
      );
      setMovie(response.data.results[random]);
    });
  }, []);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage:
          "url(" +
          "https://image.tmdb.org/t/p/w1280/" +
          movie.backdrop_path +
          ")",
        backgroundPosition: "center center",
      }}
    >
      <div className="banner-content">
        <h1 className="banner-title">{movie.name}</h1>
        <div className="banner-buttons">
          <button className="banner-button">Play</button>
          <button className="banner-button">My List</button>
        </div>
        <h1 className="banner-desc">{movie.overview}</h1>
      </div>
      <div className="banner-fadeBottom"></div>
    </header>
  );
}

export default Banner;
