import React, { useState ,useEffect } from "react";
import './App.css';
import Main from './component/Main'
import Navbar from './component/Navbar'

import "./data/fa-library";

function App() {

  const [movies, setMovies] = useState([]);


  const cleanMovieData = (movie) => {
    const cleanedMovie = {
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      img: movie.Poster,
      isfav: false
    };
    return cleanedMovie;
  }


 
  const activateSearch = (searchTerm) => {
  if(searchTerm) {
    searchTerm.replace(/\s/g, '+');
    return `http://www.omdbapi.com/?apikey=248d288&s=${searchTerm}`
  } else {
    return ``
  }
}




const getMovies = (searchTerm) => {
  fetch(activateSearch(searchTerm))
  .then((res) => res.json())
  .then((res) => {
    if(res.Error){
      console.log(res.Error)
    } else {
      const cleanedMovies = res.Search.map(cleanMovieData);
      console.log(cleanedMovies)
      const removedNoImgMovies = cleanedMovies.filter((movie) => {
        return movie.img !== "N/A";
      }) 
      setMovies(removedNoImgMovies);
    }
    
  })
  .catch((error) => {
    console.log(error);
  })
}

useEffect(() => {
  getMovies();
}, [])

  return (
    <>
      <section className="nav">
        <Navbar
        getMovies={getMovies}
        activateSearch={activateSearch}
        />
      </section>
      <section className="content">
        <Main movies={movies}/>
      </section>
    </>
  );
}

export default App;
