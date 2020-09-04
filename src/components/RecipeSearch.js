import React, { Component } from 'react';

let resultArr = [
    {
        recipeName: '',
        recipeURL: '',
        selected: false
    }
];

class RecipeSearch extends Component {
    constructor(props) {
        super(props);
    }

    searchRecipe = () => {
        if(this.props.availableIng.length !== 0) {
            let chosen = this.props.availableIng[Math.floor(Math.random() * this.props.availableIng.length)];
            fetch(`https://api.edamam.com/search?q=${chosen}&app_id=3e3ca772&app_key=adc631787b99b184e7717a2f854c953c`)
            .then(response => response.json())
            .then(res => {
                if (resultArr.length !== 0) {
                    resultArr = [];
                }

                for (let resRecipe of res.hits) {
                    resultArr.push({
                        recipeName: resRecipe.recipe.label,
                        recipeURL: resRecipe.recipe.url,
                        selected: false
                    });
                }

                this.props.update(resultArr);
            })
            .catch(err => {
                console.log(err);
            });  
        } 
    };

    render() {
        return (
           <div>
                <h4>Recipes based on the ingredients you have!</h4>
                <button onClick={this.searchRecipe}>Search!</button>
           </div> 
        )
    }
}

export default RecipeSearch;