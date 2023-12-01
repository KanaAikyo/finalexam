import React, { useState } from "react";
import { foods } from "./food";
import "./App.css";
// import SearchBar from "./components/SearchBar";
// import FilteredRecipe from "./components/FilteredRecipe";

function App() {
  const [filteredRecipes, setFilteredRecipes] = useState(foods);
  const [typedValue, setTypedValue] = useState(null);

  const handleInputChange = (e) => {
    const typed = e.target.value;
    setTypedValue(typed);
    const regex = new RegExp(typed, "gi");
    const updatedRecipes = foods.filter((recipe) => {
      return recipe.name.match(regex);
    });
    setFilteredRecipes(updatedRecipes);
  };

  const highLight = filteredRecipes.map((recipe) => {
    const regex = new RegExp(typedValue, "gi");
    const foodName = recipe.name.replace(
      regex,
      (match) => `<span className="hi">${match}</span>`
    );
    return (
      <li key={recipe.name}>
        <h4>
          <span>{foodName}</span>
        </h4>
        <p className="description">{recipe.description}</p>
      </li>
    );
  });

  return (
    <div className="all">
      <h1>Dish Finder</h1>
      <div className="">
        <label htmlFor="search">Search Recipes</label>
        <input onChange={handleInputChange} type="text" id="search" />
        {highLight}
        {/* {filteredRecipes.map((recipe) => (
          <li key={recipe.name}>
            <h4 className="name">{recipe.name}</h4>
            <p class="description">{recipe.description}</p>
          </li>
        ))} */}
      </div>
    </div>
  );
}
export default App;
