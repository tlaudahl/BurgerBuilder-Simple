import React from "react";

import styles from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";

export default function Toolbar(props) {
  return (
    <header className={styles.Toolbar}>
      <div>MENU</div>
      <Logo />
      <nav>...</nav>
    </header>
  );
}
