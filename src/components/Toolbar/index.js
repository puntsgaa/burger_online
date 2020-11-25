import React from "react";
import styles from "./style.module.css";
import Logo from "../Logo";
function Toolbar (){
    return(
      <header className={styles.Toolbar}>
          <div>...</div>
          <Logo/>
          <nav>Цэс</nav>
      </header>
    );
}

export default Toolbar;