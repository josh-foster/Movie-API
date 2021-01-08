import React, { useState ,useEffect } from "react";
import './App.css';
import Main from './component/Main'
import Navbar from './component/Navbar'



function App() {

  const [movies, setMovies] = useState([]);
  console.log(movies);

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
  fetch(`http://www.omdbapi.com/?apikey=248d288&s=lord+of+the+rings`)
  .then((res) => res.json())
  .then((res) => {
    if(res.Error){
      console.log(res.Error)
    } else {
      const cleanedMovies = res.Search.map(cleanMovieData);
      console.log(cleanedMovies)
      setMovies(cleanedMovies);
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
        />
      </section>
      <section className="content">
        <Main movies={movies}/>
      </section>
    </>
  );
}

export default App;
