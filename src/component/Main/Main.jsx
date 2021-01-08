import React from "react";
import styles from "./Main.module.scss";
import MovieCardList from "../MovieCardList"

const Main = (props) => {

  const {movies} = props
  return (
    <>
      <MovieCardList movies={movies}/>
    </>
  );
};

export default Main;
