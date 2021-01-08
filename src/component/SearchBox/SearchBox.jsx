import React from "react";
import styles from "./SearchBox.module.scss";

const SearchBox = (props) => {

  const { getMovies, activateSearch } = props

  const handleChange = (e) => {
    activateSearch(e.target.value);
    getMovies(e.target.value);
  }
  return (
    <input 
    onChange={handleChange}
    type="text"
    placeholder="Search Movies..." />
  );
};

export default SearchBox;
