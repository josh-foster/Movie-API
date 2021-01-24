import React, { useState } from "react";
import styles from "./MovieCard.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MovieCard = (props) => {

  const {
    id,
    title,
    year, 
    img,
    isFav
  } = props.movie
 
  const [favState, setFavState] = useState(isFav);
  const heartIcon = ["far", "heart"];
  const recomendIcon = ["fas", "users"];

  const handleFavClick = (e) => {
    e.stopPropagation();
    // toggleFav(recipe);
    setFavState(!isFav);
  };

  return (
    <>
    <article className={styles.card}>
      <h2>{title}</h2>
      
        <img className={styles.img} src={img} alt=""/>
      
      
      
      
        
      
      <p> <FontAwesomeIcon icon={heartIcon} /> Released in {year} <FontAwesomeIcon icon={recomendIcon} /></p>
      
      
  
    </article>
  </>
  );
};

export default MovieCard;
