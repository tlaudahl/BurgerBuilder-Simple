import React from "react";

import styles from "./BuildControl.module.css";

export default function BuildControl(props) {
  return (
    <div className={styles.BuildControl}>
      <div className={styles.Label}>{props.label}</div>
      <button className={styles.Less}>Less</button>
      <button className={styles.More}>More</button>
    </div>
  );
}
