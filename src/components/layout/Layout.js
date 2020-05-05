import React from "react";
import styles from "./Layout.module.css";

export default function Layout(props) {
  return (
    <>
      <div>Toolbar, SideDrawer, Backdrop</div>
      <main className={styles.content}>{props.children}</main>
    </>
  );
}
