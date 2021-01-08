import React, { useState ,useEffect } from "react";
import './App.css';
import Main from './component/Main'
import Navbar from './component/Navbar'



function App() {

  const cleanMovieData = (movie) => {
    const cleanedMovie = {
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      img: movie.Poster
    };
    return cleanedMovie;
  }


 
//   const activateSearch = (searchTerm) => {
//   if(searchTerm) {
//     searchTerm.replace(/\s/g, '+');
//     return `http://www.omdbapi.com/?apikey=248d288&s=lord+of+the+rings`
//   } else {
//     return ``
//   }
// }




const getMovies = () => {
  fetch(`http://www.omdbapi.com/?apikey=248d288&s=abe&y=2002`)
  .then((res) => res.json())
  .then((res) => {
    const cleanedMovies = res.Search.map(cleanMovieData);
    console.log(cleanedMovies);
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
        />
      </section>
      <section className="content">
        <Main/>
      </section>
    </>
  );
}

export default App;
