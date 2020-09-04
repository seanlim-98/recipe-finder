import React, { Component } from 'react';

const Inventory = (props) => {
    let { availableIng } = props;
    return(
        <div>
            <h4>Inventory</h4>
            <ul className='ingredient-list'>
                {availableIng.map((ingredient, i) => {
                    return <li key={i} class='ingredient'>{ingredient.charAt(0).toUpperCase() + ingredient.slice(1)}</li>
                })}
            </ul>
        </div>
    );
}

export default Inventory;