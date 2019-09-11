import React from 'react';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
    salad: 10,
    cheese: 20,
    meat: 15,
    bacon: 25
}

class BurgerBuilder extends React.Component{
    state = {
        ingredient: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        price: 10
    }

    addIndiHandler = (type) => {
        const oldcount = this.state.ingredient[type];
        const update = oldcount + 1;
        const updateIndi = {
            ...this.state.ingredient
        };
        updateIndi[type] = update;
        const price = INGREDIENT_PRICES[type];
        const oldPrice = this.state.price;
        const newPrice = oldPrice + price;
        this.setState({
            price: newPrice,
            ingredient: updateIndi
        })
    }

    removeIndiHandler = (type) => {
        const oldcount = this.state.ingredient[type];
        if(oldcount <= 0){
            return;
        }
        const update = oldcount - 1;
        const updateIndi = {
            ...this.state.ingredient
        };
        updateIndi[type] = update;
        const price = INGREDIENT_PRICES[type];
        const oldPrice = this.state.price;
        const newPrice = oldPrice - price;
        this.setState({
            price: newPrice,
            ingredient: updateIndi
        })
    }

    render(){
        return(
            <div>
                <Burger ingredient={this.state.ingredient}/>
                <p style={{width: "100%", textAlign: "center"}}>price = Rs {this.state.price}</p>
                <BuildControls ingredientAdded ={this.addIndiHandler} ingredientRemove={this.removeIndiHandler}/>
            </div>
        );
    }
}

export default BurgerBuilder;