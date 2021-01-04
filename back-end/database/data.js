const Recipes = [
  {
    'recipeId': 1,
    'ownerId': 1,
    'recipeName': 'Soupie Soup',
    'category': [
      'Dinner',
      'Soup'
    ],
    'shared': 'Only me',
    'ingredients': [
      'carrot',
      'celery',
      'onion',
      'basil',
      'salt',
      'pepper',
      'potato',
      'tomato',
      'chicken broth'
    ],
    'time': 45,
    'difficulty': 'Easy',
    'favoritedBy': [
      2
    ],
    'vegan': false,
    'steps': [
      'Chop veggies',
      'Combine in pot',
      'Add salt and pepper to taste',
      'Mix the rest of the ingredients',
      'Cook on stove for 25 min'
    ],
    'imageUrl': 'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
  },
  {
    'recipeID': 2,
    'ownerId': 1,
    'recipeName': 'Vegan Soupie Soup',
    'category': [
      'Dinner',
      'Lunch',
      'Soup'
    ],
    'shared': 'Friends',
    'ingredients': [
      'mushroom',
      'soybeans',
      'onion',
      'cilantro',
      'salt',
      'pepper',
      'potato',
      'tomato',
      'vegetable broth'
    ],
    'time': 60,
    'difficulty': 'Medium',
    'favoritedBy': [
      18,
      12
    ],
    'vegan': true,
    'steps': [
      'Chop veggies',
      'Boil in vegetable broth',
      'Mash potatoes',
      'Mix the rest of the ingredients',
      'Put in the oven for 30 minutes',
      'Let it cool for 5 minutes'
    ],
    'imageUrl': 'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
  },
  {
    'recipeId': 3,
    'ownerId': 1,
    'recipeName': 'Vegan Soupie Soup',
    'category': [
      'Dinner',
      'Lunch',
      'Soup'
    ],
    'shared': 'Friends',
    'ingredients': [
      'mushroom',
      'soybeans',
      'onion',
      'cilantro',
      'salt',
      'pepper',
      'potato',
      'tomato',
      'vegetable broth'
    ],
    'time': 60,
    'difficulty': 'Medium',
    'favoritedBy': [
      18,
      12
    ],
    'vegan': true,
    'steps': [
      'Chop veggies',
      'Boil in vegetable broth',
      'Mash potatoes',
      'Mix the rest of the ingredients',
      'Put in the oven for 30 minutes',
      'Let it cool for 5 minutes'
    ],
    'imageUrl': 'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
  }
];

const UserCookBook = {
  'userId': 1,
  'username': 'Dave',
  'favoriteRecipes': [
    1,
    2
  ],
  'recipes': [
    1,
    2,
    3
  ]
};

const User = {
  'nickname': 'rickhawley109',
  'name': 'rickhawley109@gmail.com',
  'picture': 'https://s.gravatar.com/avatar/6e785eb0726d6552198006f3bc03d4f6?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fri.png',
  'updated_at': '2020-12-29T21:28:15.625Z',
  'email': 'rickhawley109@gmail.com',
  'email_verified': false,
  'sub': 'auth0|5feb9f6fea3fc70078775277'
};

// add users collection

module.exports = {
  Recipes: Recipes,
  UserCookBook: UserCookBook,
  User: User
};