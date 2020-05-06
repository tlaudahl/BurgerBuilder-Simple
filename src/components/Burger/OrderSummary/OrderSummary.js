import React from "react";

import Button from "../../UI/Button/Button";

export default function OrderSummary(props) {
  const ingredientSummary = Object.keys(props.ingredients).map((key) => (
    <li key={key}>
      <span style={{ textTransform: "capitalize" }}>{key}</span>:{" "}
      {props.ingredients[key]}
    </li>
  ));
  return (
    <>
      <h3>Your Order Total: ${props.totalPrice.toFixed(2)}</h3>
      <p>A delicious burger with the following ingredients: </p>
      <ul>{ingredientSummary}</ul>
      <p>Continue to Checkout?</p>
      <Button clicked={props.purchaseCancelled} btnType="Danger">
        CANCEL
      </Button>
      <Button clicked={props.purchaseContinue} btnType="Success">
        CONTINUE
      </Button>
    </>
  );
}
