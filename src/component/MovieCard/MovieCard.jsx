import React from "react";
import styles from "./MovieCard.module.scss";

const MovieCard = (props) => {

  const {
    id,
    title,
    year, 
    img

    
  } = props.movie
  return (
    <>
    <article className={styles.card}>
      <h2>{title}</h2>
      <section>
        <img className={styles.img} src={img} alt=""/>
      </section>
      <p>{year}</p>
    </article>
  </>
  );
};

export default MovieCard;
