
export const recipe =
{
  recipeId: 1,
  ownerId: 1,
  recipeName: 'Soupie Soup',
  category: 'Dinner',
  rating: 3.5,
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
      category: 'Dinner',
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
      category: 'Beverage',
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
      category: 'Dinner',
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
      category: 'Dessert',
      shared: 'Friends',
      ingredients: ['carrot', 'chicken', 'rice', 'cheese', 'salt', 'pepper', 'brown sugar', 'blueberries', 'cream cheese'],
      time: 75,
      difficulty: 'Hard',
      favoritedBy: [3, 4, 10],
      vegan: false,
      steps: ['Chop veggies', 'Combine in pot', 'Add salt and pepper to taste', 'Mix the rest of the ingredients', 'Cook on stove for 25 min'],
      imageUrl: 'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
    },
    {
      recipeId: 30,
      ownerId: 1,
      recipeName: 'Cheesy',
      category: 'Lunch',
      shared: 'Friends',
      ingredients: ['carrot', 'chicken', 'rice', 'cheese', 'salt', 'pepper', 'brown sugar', 'blueberries', 'cream cheese'],
      time: 75,
      difficulty: 'Hard',
      favoritedBy: [3, 4, 10],
      vegan: false,
      steps: ['Chop veggies', 'Combine in pot', 'Add salt and pepper to taste', 'Mix the rest of the ingredients', 'Cook on stove for 25 min'],
      imageUrl: 'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
    },
    {
      recipeId: 100,
      ownerId: 1,
      recipeName: 'blueberry pie',
      category: 'Dessert',
      shared: 'Friends',
      ingredients: ['carrot', 'chicken', 'rice', 'cheese', 'salt', 'pepper', 'brown sugar', 'blueberries', 'cream cheese'],
      time: 75,
      difficulty: 'Hard',
      favoritedBy: [3, 4, 10],
      vegan: false,
      steps: ['Chop veggies', 'Combine in pot', 'Add salt and pepper to taste', 'Mix the rest of the ingredients', 'Cook on stove for 25 min'],
      imageUrl: 'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
    },
    {
      recipeId: 2,
      ownerId: 1,
      recipeName: 'rice',
      category: 'Lunch',
      shared: 'Friends',
      ingredients: ['carrot', 'chicken', 'rice', 'cheese', 'salt', 'pepper', 'brown sugar', 'blueberries', 'cream cheese'],
      time: 75,
      difficulty: 'Hard',
      favoritedBy: [3, 4, 10],
      vegan: false,
      steps: ['Chop veggies', 'Combine in pot', 'Add salt and pepper to taste', 'Mix the rest of the ingredients', 'Cook on stove for 25 min'],
      imageUrl: 'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
    },
    {
      recipeId: 90,
      ownerId: 1,
      recipeName: 'taco bell',
      category: 'Dinner',
      shared: 'Friends',
      ingredients: ['carrot', 'chicken', 'rice', 'cheese', 'salt', 'pepper', 'brown sugar', 'blueberries', 'cream cheese'],
      time: 75,
      difficulty: 'Hard',
      favoritedBy: [3, 4, 10],
      vegan: false,
      steps: ['Chop veggies', 'Combine in pot', 'Add salt and pepper to taste', 'Mix the rest of the ingredients', 'Cook on stove for 25 min'],
      imageUrl: 'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
    },
    {
      recipeId: 59,
      ownerId: 1,
      recipeName: 'chili',
      category: 'Dinner',
      shared: 'Friends',
      ingredients: ['carrot', 'chicken', 'rice', 'cheese', 'salt', 'pepper', 'brown sugar', 'blueberries', 'cream cheese'],
      time: 75,
      difficulty: 'Hard',
      favoritedBy: [3, 4, 10],
      vegan: false,
      steps: ['Chop veggies', 'Combine in pot', 'Add salt and pepper to taste', 'Mix the rest of the ingredients', 'Cook on stove for 25 min'],
      imageUrl: 'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
    },
    {
      recipeId: 29,
      ownerId: 1,
      recipeName: 'dog food cake',
      category: 'Snack',
      shared: 'Friends',
      ingredients: ['carrot', 'chicken', 'rice', 'cheese', 'salt', 'pepper', 'brown sugar', 'blueberries', 'cream cheese'],
      time: 75,
      difficulty: 'Hard',
      favoritedBy: [3, 4, 10],
      vegan: false,
      steps: ['Chop veggies', 'Combine in pot', 'Add salt and pepper to taste', 'Mix the rest of the ingredients', 'Cook on stove for 25 min'],
      imageUrl: 'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
    },
    {
      recipeId: 72,
      ownerId: 1,
      recipeName: 'pizza',
      category: 'Dinner',
      shared: 'Friends',
      ingredients: ['carrot', 'chicken', 'rice', 'cheese', 'salt', 'pepper', 'brown sugar', 'blueberries', 'cream cheese'],
      time: 75,
      difficulty: 'Hard',
      favoritedBy: [3, 4, 10],
      vegan: false,
      steps: ['Chop veggies', 'Combine in pot', 'Add salt and pepper to taste', 'Mix the rest of the ingredients', 'Cook on stove for 25 min'],
      imageUrl: 'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
    },
    {
      recipeId: 81,
      ownerId: 1,
      recipeName: 'Empanadillas',
      category: 'Snack',
      shared: 'Friends',
      ingredients: ['carrot', 'chicken', 'rice', 'cheese', 'salt', 'pepper', 'brown sugar', 'blueberries', 'cream cheese'],
      time: 75,
      difficulty: 'Hard',
      favoritedBy: [3, 4, 10],
      vegan: false,
      steps: ['Chop veggies', 'Combine in pot', 'Add salt and pepper to taste', 'Mix the rest of the ingredients', 'Cook on stove for 25 min'],
      imageUrl: 'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
    },
    {
      recipeId: 9,
      ownerId: 1,
      recipeName: 'street tacos',

      category: 'Dinner',
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


export const Users = {
  'fetchedUsers': [
    {
      'userId': 1,
      'given_name': 'Jonathan',
      'family_name': 'Garcia',
      'nickname': 'jagspurs7',
      'name': 'Jonathan Garcia',
      'picture': 'https://lh3.googleusercontent.com/a-/AOh14GigZeSo4fmuzlYR_oYon8vlnE7AzjFNTuUfl-Ek=s96-c',
      'locale': 'en',
      'updated_at': '2021-01-01T17:08:03.805Z',
      'email': 'jagspurs7@gmail.com',
      'email_verified': true,
      'sub': 'google-oauth2|103370284414679082948',
      'friends': [
        {
          'userId': 22,
          'nickname': 'someOtherNickName',
          'name': 'Halle Garcia',
          'picture': 'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/130309299_1929505633863146_7552594757939529966_o.jpg?_nc_cat=104&ccb=2&_nc_sid=8bfeb9&_nc_ohc=Xx7dQFt22bgAX-vqs0_&_nc_ht=scontent-dfw5-2.xx&oh=1fa58d3aea551de114ae9ac0d774b255&oe=6015D920',
          'updated_at': '2020-12-29T21:28:15.625Z',
          'email': 'fakeEmail4@gmail.com',
          'email_verified': false,
          'friends': []
        },
        {
          'userId': 50,
          'nickname': 'evenDifferentNickName',
          'name': 'Emma Garcia',
          'picture': 'https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/55674683_1357273767753005_6657891983945629696_o.jpg?_nc_cat=105&ccb=2&_nc_sid=8bfeb9&_nc_ohc=3GK4VF4GvJoAX8BM38E&_nc_ht=scontent-dfw5-1.xx&oh=359025687f48806bf972e47d21028621&oe=6018415F',
          'updated_at': '2020-12-29T21:28:15.625Z',
          'email': 'fakeEmail5@gmail.com',
          'email_verified': false,
          'friends': []
        },
        {
          'userId': 9,
          'nickname': 'somenickname',
          'name': 'Noah Garcia',
          'picture': 'https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/120738363_1865815250232185_613854060227026462_o.jpg?_nc_cat=104&ccb=2&_nc_sid=8bfeb9&_nc_ohc=4dGJnMau47wAX-YGApK&_nc_ht=scontent-dfw5-2.xx&oh=77ca73b25a46e8599811a9ef195c0a3c&oe=601802F8',
          'updated_at': '2020-12-29T21:28:15.625Z',
          'email': 'fakeEmail@gmail.com',
          'email_verified': false,
          'friends': []
        },
      ]
    },
    {
      'userId': 20,
      'nickname': 'rickhawley109',
      'name': 'rickhawley109@gmail.com',
      'picture': 'https://s.gravatar.com/avatar/6e785eb0726d6552198006f3bc03d4f6?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fri.png',
      'updated_at': '2020-12-29T21:28:15.625Z',
      'email': 'rickhawley109@gmail.com',
      'email_verified': false,
      'sub': 'auth0|5feb9f6fea3fc70078775277',
      'friends': []
    },
    {
      'userId': 9,
      'nickname': 'somenickname',
      'name': 'Noah Garcia',
      'picture': 'https://s.gravatar.com/avatar/6e785eb0726d6552198006f3bc03d4f6?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fri.png',
      'updated_at': '2020-12-29T21:28:15.625Z',
      'email': 'fakeEmail@gmail.com',
      'email_verified': false,
      'friends': []
    },
    {
      'userId': 6,
      'nickname': 'differentNickName',
      'name': 'Vincent Vaga',
      'picture': 'https://s.gravatar.com/avatar/6e785eb0726d6552198006f3bc03d4f6?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fri.png',
      'updated_at': '2020-12-29T21:28:15.625Z',
      'email': 'fakeEmail2@gmail.com',
      'email_verified': false,
      'friends': []
    },
    {
      'userId': 11,
      'nickname': 'newNickName',
      'name': 'Jules Winfield',
      'picture': 'https://s.gravatar.com/avatar/6e785eb0726d6552198006f3bc03d4f6?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fri.png',
      'updated_at': '2020-12-29T21:28:15.625Z',
      'email': 'fakeEmail3@gmail.com',
      'email_verified': false,
      'friends': []
    },
    {
      'userId': 22,
      'nickname': 'someOtherNickName',
      'name': 'Halle Garcia',
      'picture': 'https://s.gravatar.com/avatar/6e785eb0726d6552198006f3bc03d4f6?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fri.png',
      'updated_at': '2020-12-29T21:28:15.625Z',
      'email': 'fakeEmail4@gmail.com',
      'email_verified': false,
      'friends': []
    },
    {
      'userId': 50,
      'nickname': 'evenDifferentNickName',
      'name': 'Emma Garcia',
      'picture': 'https://s.gravatar.com/avatar/6e785eb0726d6552198006f3bc03d4f6?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fri.png',
      'updated_at': '2020-12-29T21:28:15.625Z',
      'email': 'fakeEmail5@gmail.com',
      'email_verified': false,
      'friends': []
    },
  ]