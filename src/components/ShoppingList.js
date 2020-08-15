import React, { Component } from 'react';

class ShoppingList extends Component {
    constructor(props) {
        super(props);
    }

    updateSavedRecipes = () => {
        this.props.update()
    };

    render() {
        return(
            <div>
                <h4>Shopping List</h4>
                {this.props.updatedList.map(recipeObj => {
                    return <li>{recipeObj}</li>
                })}
            </div>
        );
    }
}

export default ShoppingList;