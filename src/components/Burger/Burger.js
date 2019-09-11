import React from 'react';
import './Burger.css';
import BurgerIndgredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {    
    let transformedIngredients = Object.keys(props.ingredient).map(igKey => {
        return [...Array(props.ingredient[igKey])].map((_, i) => {
            return <BurgerIndgredient key={igKey + i} type={igKey} />;
        });
    }).reduce((arr, ele) => {
        return arr.concat(ele);
    }, []);

    if(transformedIngredients.length === 0){
        transformedIngredients = <p>Please add something</p>
    }
    return(
        <div className="Burger">
            <BurgerIndgredient type="bread-top" />
            {transformedIngredients}
            <BurgerIndgredient type="bread-bottom" />
        </div>
    );
}

export default burger;