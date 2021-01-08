import React from "react";
import styles from "./Navbar.module.scss";
import SearchBox from '../SearchBox'

const Navbar = () => {
  return (
    <>  
      <section className={styles.title}>
        <h1>Search Movies</h1>
      </section>

      <section className={styles.filters}>
        <div className={styles.search}>
          <SearchBox
            // activateSearch={activateSearch}
            // grabMoviesBySearch={grabMoviesBySearch}
          />
        </div>
      </section>
    </>
  );
};

export default Navbar;
