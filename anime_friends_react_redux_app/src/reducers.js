import {
  CHANGE_SEARCHFIELD,
  REQUEST_ANIME_FRIENDS_PENDING,
  REQUEST_ANIME_FRIENDS_SUCCESS,
  REQUEST_ANIME_FRIENDS_FAILED
 } from './constants';

const initialStateSearch = {
  searchField: ''
}

export const searchAnimeFriends = (state=initialStateSearch, action={}) => {
  switch (action.type) {
    case CHANGE_SEARCHFIELD:
      return Object.assign({}, state, {searchField: action.payload})
    default:
      return state
  }
}

const initialStateAnimeFriends = {
  animeFriends: [],
  isPending: true
}

export const requestAnimeFriends = (state=initialStateAnimeFriends, action={}) => {
  switch (action.type) {
    case REQUEST_ANIME_FRIENDS_PENDING:
      return Object.assign({}, state, {isPending: true})
    case REQUEST_ANIME_FRIENDS_SUCCESS:
      return Object.assign({}, state, {animeFriends: action.payload, isPending: false})
    case REQUEST_ANIME_FRIENDS_FAILED:
      return Object.assign({}, state, {error: action.payload})
    default:
      return state
  }
}
