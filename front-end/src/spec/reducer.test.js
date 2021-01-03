import * as reducer from '../reducers/user.js';
/*
https://redux.js.org/recipes/writing-tests
Jest is recommended on Redux docs as testing engine.
It runs in a Node environment so you won't have access to the DOM.

https://jestjs.io/docs/en/configuration
By default Jest looks for .js, .jsx, and .tsx files inside of __tests__ folder
as well as any files with a suffix of .test or .spec
e.g. reducers.test.js
e.g. reducers.spec.js

yellow - total number of tests
green - passing tests
red - failed tests

*/
describe('user reducer', () => {
  it('should return the initial state', () => {
    expect(reducer.userReducer(undefined, {})).toEqual(
      {
        user: null
      }
    );
  });

  it('should handle SET_USER', () => {
    expect(
      reducer.userReducer({}, {
        type: 'SET_USER',
        user: 'testUser'
      })
    ).toEqual(
      {
        user: 'testUser'
      }
    );
  });
});