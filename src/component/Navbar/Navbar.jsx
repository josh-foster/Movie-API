import React from "react";
import styles from "./Navbar.module.scss";
import SearchBox from '../SearchBox'

const Navbar = (props) => {
const { getMovies, activateSearch } = props

  return (
    <>  
      <section className={styles.title}>
        <h1>My Movies</h1>
      </section>

      <section className={styles.filters}>
        <div className={styles.search}>
          <SearchBox
            getMovies={getMovies}
            activateSearch={activateSearch}
          />
        </div>
      </section>
    </>
  );
};

export default Navbar;
