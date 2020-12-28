//TODO:
//get recipe data from store(?)

import recipe from './dummyRecipeData.js';

const RecipeData = () => {

  return (
    <div>
      <h1>{recipe.name}</h1>
      <a href="USER_URL">{recipe.chef}</a>
      <img src="./chicken.jpg"></img>
      <ul>{recipe.ingredients.map(ingredient => (
        <li>{ingredient}</li>
      ))}</ul>
      <ol>{recipe.instructions.map(step => (
        <li>{step}</li>
      ))}</ol>
    </div>
  );
};

export default RecipeData;