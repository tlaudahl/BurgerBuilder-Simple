import React from 'react';
import styles from './Order.module.css';

const order = (props) => {
    const ingredients = [];
    for(let name in props.ingredients) {
        ingredients.push({name, amount: props.ingredients[name]})
    }

    const ingredientOutput = ingredients.map(ig => {
        return <span style={{ textTransform: 'capitalize', display: 'inline-block', margin: '0 8px', border: '1px solid #ccc', padding: '5px' }} key={ig.name}>{ig.name} ({ig.amount}) </span>
    })

    return (
        <div className={styles.Order}>
        <p>Ingredients: {ingredientOutput}</p>
            <p>Price: $<strong>{Number(props.price).toFixed(2)}</strong></p>
        </div>
    )
};

export default order;