import React, { useState ,useEffect } from "react";
import './App.css';
import Main from './component/Main'
import Navbar from './component/Navbar'



function App() {

  const cleanMovieData = (movie) => {
    const cleanedMovie = {
      id: movie.imdbID,
      title: movie.Title,
      release: movie.Released,
      year: movie.Year
    };
    return cleanedMovie;
  }

  // const activateSearch = (searchTerm) => {
//   if(searchTerm) {
//     return ``
//   } else {
//     return ``
//   }
// }




const getMovies = () => {
  fetch(`http://www.omdbapi.com/?apikey=248d288&t=lord+of+the+rings`)
  .then((res) => res.json())
  .then((res) => {
    const cleanedMovies = cleanMovieData(res);
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
