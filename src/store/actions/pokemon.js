import * as ActionTypes from './actionTypes';

export const getListPokemon = params => ({
  type: ActionTypes.GET_LIST_POKEMON_REQUEST,
  payload: params,
});
