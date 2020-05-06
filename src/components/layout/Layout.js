import React from "react";

import styles from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";

export default function Layout(props) {
  return (
    <>
      <Toolbar />
      <main className={styles.content}>{props.children}</main>
    </>
  );
}
