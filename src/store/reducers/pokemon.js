import * as ActionTypes from '@/store/actions/actionTypes';

export const initialState = {
  listPokemon: {
    requesting: false,
    status: '',
    result: null,
    error: null,
  },
};

const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_LIST_POKEMON_REQUEST: {
      return {
        ...state,
        listPokemon: {
          ...state.listPokemon,
          requesting: true,
          status: '',
        },
      };
    }

    case ActionTypes.GET_LIST_POKEMON_SUCCESS: {
      return {
        ...state,
        listPokemon: {
          ...state.listPokemon,
          requesting: false,
          status: 'success',
          result: action.payload,
        },
      };
    }

    case ActionTypes.GET_LIST_POKEMON_FAIL: {
      return {
        ...state,
        listPokemon: {
          ...state.listPokemon,
          requesting: false,
          status: 'success',
          error: action.payload,
        },
      };
    }

    default:
      return state;
  }
};

export default pokemonReducer;
