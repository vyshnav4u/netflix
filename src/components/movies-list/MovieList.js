import React, { useEffect, useState } from "react";
import "./MovieList.css";
import { apiKey, baseUrl, imgUrl } from "../../constants/constants";
import axios from "../axios";
import YouTube from "react-youtube";

function MovieList(prop) {
  const [movie, setMovies] = useState();
  const [trailer, setTrailer] = useState();
  useEffect(() => {
    axios
      .get(baseUrl + `discover/tv?api_key=${apiKey}&with_networks=213`)
      .then((response) => {
        setMovies(response.data.results);
        console.log(response.data.results);
      });
  }, []);

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  const movieClick = (movie_id) => {
    console.log(movie_id);
    axios
      .get(
        `${baseUrl}movie/${movie_id}/videos?api_key=${apiKey}&language=en-US`
      )
      .then((res) => {
        console.log(res.data);
        if (res.data.results.length != 0) {
          setTrailer(res.data.results);
          console.log(trailer);
        }
      });
  };

  return (
    <div className="movie-list">
      <h3 className="movie-title"> {prop.title} </h3>
      <div className="movie-posters">
        {movie
          ? movie.map((obj) => {
              return (
                <img
                  onClick={() => movieClick(obj.id)}
                  className={
                    prop.isLarge
                      ? "lage-poster single-movie-poster"
                      : "single-movie-poster"
                  }
                  src={`${imgUrl + obj.backdrop_path}`}
                  alt="movie-poster"
                />
              );
            })
          : ""}
      </div>
      {trailer && <YouTube videoId={trailer.key} opts={opts} />}
    </div>
  );
}

export default MovieList;
