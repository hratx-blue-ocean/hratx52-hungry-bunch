import Print from './Print.jsx';
import ChefData from './ChefData.jsx';
import Favorite from './Favorite.jsx';
import RecipeData from './RecipeData.jsx';
import Rating from './Rating.jsx';

const Recipe = () => {
  return (
    <div>
      <RecipeData />
      <Print />
      <Favorite />
      <Rating />
    </div>
  );
};
