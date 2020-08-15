import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Inventory from './components/Inventory';
import RecipeSearch from './components/RecipeSearch';
import ShoppingList from './components/ShoppingList';

/* Functionality to work on 
1) Select button for recipe - indicate it's selected
2) Adds ingredients for that recipe to Shopping List 
3) Update state
4) Check for matches between Shopping List and Inventory
*/ 

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userInput: '',
			inventory: [],
			recipeList: [],
			shoppingList: [],
			savedRecipes: []
		}
	}

	getInventoryData = (event) => {
		if (event.key === 'Enter') {
			this.setState(state => {
				const inventory = state.inventory.concat(state.userInput);
				return {
					userInput: '',
					inventory: inventory
				};
			})
		}
	}

	inputChange = (event) => {
		this.setState({userInput: event.target.value});
	}

	updateRecipes = (recipeList) => {
		this.setState({recipeList: recipeList});
	}

	saveRecipe = (name) => {
		let resArr = this.state.savedRecipes;
		resArr.push(name);
		this.setState({savedRecipes: resArr})
	}

	render() {
		return (
			<div className="App-container">
			    <div className="App">
			    	<h3>Put in the ingredients you currently have!</h3>
			    	<input className="big-search" type='text' value={this.state.userInput} onChange={this.inputChange} onKeyPress={this.getInventoryData} placeholder='What do you have?'/>
			    	<div className="container">
			    		<div className="inventory-section">
					    	<Inventory availableIng={this.state.inventory}/>
					    </div>
					    <div className="search-section">
					    	<RecipeSearch availableIng={this.state.inventory} update={this.updateRecipes}/>
					    	<ul className="recipe-list">
					    		{this.state.recipeList.map((recipeObj, i) => {
					    			return <li class='recipe' key={i}>{recipeObj.recipeName}
					    			<span onClick={this.saveRecipe(recipeObj.recipeName)}> Save</span></li>
					    		})}
					    	</ul>
					    </div>
					    <div className="bookmark-section">
					    	<ShoppingList updatedList={this.state.savedRecipes}/>
					    </div>
			    	</div>	
			    </div>
		    </div>
		);
	}
}

export default App;
