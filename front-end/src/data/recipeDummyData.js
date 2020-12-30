export const recipe =
{
  recipeId: 1,
  ownerId: 1,
  recipeName: 'Soupie Soup',
  category: ['Dinner', 'Soup'],
  shared: 'Only me',
  ingredients: ['carrot', 'celery', 'onion', 'basil', 'salt', 'pepper', 'potato', 'tomato', 'chicken broth'],
  time: 45,
  difficulty: 'Easy',
  favoritedBy: [2],
  vegan: false,
  steps: ['Chop veggies', 'Combine in pot', 'Add salt and pepper to taste', 'Mix the rest of the ingredients', 'Cook on stove for 25 min'],
  imageUrl: 'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
};

export const userCookbook = {
  userId: 1,
  username: 'Dave',
  favoritesRecipes: [7, 60, 20, 18, 88, 55, 24],
  recipes: [
    {
      recipeId: 1,
      ownerId: 1,
      recipeName: 'Soupie Soup',
      category: ['Dinner', 'Soup'],
      shared: 'Only me',
      ingredients: ['carrot', 'celery', 'onion', 'basil', 'salt', 'pepper', 'potato', 'tomato', 'chicken broth'],
      time: 45,
      difficulty: 'Easy',
      favoritedBy: [2],
      vegan: false,
      steps: ['Chop veggies', 'Combine in pot', 'Add salt and pepper to taste', 'Mix the rest of the ingredients', 'Cook on stove for 25 min'],
      imageUrl: 'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
    },
    {
      recipeId: 4,
      ownerId: 1,
      recipeName: 'Vegan Soupie Soup',
      category: ['Dinner', 'Lunch', 'Soup'],
      shared: 'Friends',
      ingredients: ['mushroom', 'soybeans', 'onion', 'cilantro', 'salt', 'pepper', 'potato', 'tomato', 'vegetable broth'],
      time: 60,
      difficulty: 'Medium',
      favoritedBy: [18, 12],
      vegan: true,
      steps: ['Chop veggies', 'Boil in vegetable broth', 'Mash potatoes', 'Mix the rest of the ingredients', 'Put in the oven for 30 minutes', 'Let it cool for 5 minutes'],
      imageUrl: 'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
    },
    {
      recipeId: 18,
      ownerId: 1,
      recipeName: 'Fish and Ketchup',
      category: ['Lunch', 'Seafood'],
      shared: 'All',
      ingredients: ['salmon', 'ketchup'],
      time: 30,
      difficulty: 'Medium',
      favoritedBy: [9, 3, 1, 11],
      vegan: false,
      steps: ['Fry the salmon at medium heat', 'Flip when golden brown', 'Cover in ketchup'],
      imageUrl: 'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
    },
    {
      recipeId: 37,
      ownerId: 1,
      recipeName: 'Cheesy blueberry chicken rice',
      category: ['Dessert', 'Breakfast'],
      shared: 'Friends',
      ingredients: ['carrot', 'chicken', 'rice', 'cheese', 'salt', 'pepper', 'brown sugar', 'blueberries', 'cream cheese'],
      time: 75,
      difficulty: 'Hard',
      favoritedBy: [3, 4, 10],
      vegan: false,
      steps: ['Chop veggies', 'Combine in pot', 'Add salt and pepper to taste', 'Mix the rest of the ingredients', 'Cook on stove for 25 min'],
      imageUrl: 'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
    },
  ]
};