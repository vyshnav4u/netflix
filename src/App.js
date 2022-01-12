import "./App.css";
import React from "react";
import NavBar from "./components/navbar/NavBar";
import Banner from "./components/banner/Banner";
import MovieList from "./components/movies-list/MovieList";
import { action, orgin } from "./constants/urls";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Banner></Banner>
      <MovieList url={orgin} isLarge title="Netflix Original"></MovieList>
      <MovieList url={action} title="Action"></MovieList>
      <MovieList url={action} title="Anime"></MovieList>
    </div>
  );
}

export default App;
