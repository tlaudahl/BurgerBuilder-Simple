import React from "react";
import styles from "./Burger.module.css";

import BurgerIngredient from "./BurgerIngredients/BurgerIngredient";

const Burger = (props) => {
  let ingredientValues = Object.keys(props.ingredients)
    .map((itemKey) => {
      return [...Array(props.ingredients[itemKey])].map((_, i) => {
        return <BurgerIngredient key={itemKey + i} type={itemKey} />;
      });
    })
    .reduce((acc, curr) => {
      return acc.concat(curr);
    }, []);

  if (ingredientValues.length === 0) {
    ingredientValues = <p>Please Start Adding Ingredients!</p>;
  }
  return (
    <div className={styles.Burger}>
      <BurgerIngredient type="bread-top" />
      {ingredientValues}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
