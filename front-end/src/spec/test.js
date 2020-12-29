import reducer from '../reducers/user.js'
//import * as types from '../../constants/ActionTypes'

describe('user reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual([
      {
        user: null
      }
    ])
  })

  it('should handle SET_USER', () => {
    expect(
      reducer([], {
        type: 'SET_USER'
      })
    ).toEqual([
      {
        user:action.user
      }
    ]);
  })
})