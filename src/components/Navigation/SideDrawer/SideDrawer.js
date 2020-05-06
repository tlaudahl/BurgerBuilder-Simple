import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

import styles from "./SideDrawer.module.css";
import Backdrop from "../../UI/Backdrop/Backdrop";

export default function SideDrawer(props) {
  return (
    <>
      <Backdrop show={props.open} clicked={props.closed} />
      <div
        className={[
          styles.SideDrawer,
          props.open ? styles.Open : styles.Close,
        ].join(" ")}
      >
        <div className={styles.Logo}>
          <Logo />
        </div>
        <NavigationItems />
      </div>
    </>
  );
}
