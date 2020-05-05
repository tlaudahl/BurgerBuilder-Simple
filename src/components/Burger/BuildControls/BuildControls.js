import React from "react";

import styles from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

export default function BuildControls(props) {
  return (
    <div className={styles.BuildControls}>
      {controls.map((control) => (
        <BuildControl key={control.label} label={control.label} />
      ))}
    </div>
  );
}
