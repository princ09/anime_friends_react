import { apiCall } from './api/api'
import {
  CHANGE_SEARCHFIELD,
  REQUEST_ANIME_FRIENDS_PENDING,
  REQUEST_ANIME_FRIENDS_SUCCESS,
  REQUEST_ANIME_FRIENDS_FAILED
 } from './constants'


export const setSearchField = (text) => ({ type: CHANGE_SEARCHFIELD, payload: text })

export const requestAnimeFriends = () => (dispatch) => {
  dispatch({ type: REQUEST_ANIME_FRIENDS_PENDING })
  apiCall('https://princ09.github.io/json_server/anime.json')
    .then(data => dispatch({ type: REQUEST_ANIME_FRIENDS_SUCCESS, payload: data }))
    .catch(error => dispatch({ type: REQUEST_ANIME_FRIENDS_FAILED, payload: error }))
}