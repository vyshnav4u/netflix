import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "../axios";
import { apiKey, imgUrl } from "../../constants/constants";

function Banner() {
  const [movie, setMovie] = useState();
  useEffect(() => {
    axios
      .get(`trending/all/week?api_key=${apiKey}&language=en-US`)
      .then((response) => {
        let randomIndex = Math.floor(Math.random() * 20);
        setMovie(response.data.results[randomIndex]);
        // console.log(response);
      });
  }, []);
  return (
    <div
      style={{
        backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ),url(${
          movie ? imgUrl + movie.backdrop_path : ""
        })`,
      }}
      className="banner-container"
    >
      <div className="content">
        <h2 className="movie-title"> {movie ? movie.title : ""} </h2>
        <div>
          <button className="gen-btn">Play</button>
          <button className="gen-btn">Playlist</button>
        </div>
        <p className="movie-desc">{movie ? movie.overview : 'Can"t load'}</p>
      </div>
      <div className="shade"></div>
    </div>
  );
}

export default Banner;
