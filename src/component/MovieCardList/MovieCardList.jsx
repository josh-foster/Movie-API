import React from "react";
import styles from "./MovieCardList.module.scss";
import MovieCard from "../MovieCard"

const MovieCardList = (props) => {

  const {movies} = props

  const getMovieJsx = (movie) => (
    <div className={styles.card} key={movie.id}>
      <MovieCard movie={movie} />
    </div>
  );

  return (
    <section className={styles.cards}>
    {movies.map(getMovieJsx)}
  </section>
  );
};

export default MovieCardList;
