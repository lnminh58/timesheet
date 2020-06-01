import { put, call, delay } from 'redux-saga/effects';
import * as ActionTypes from '@/store/actions/actionTypes';
import { getListPokemon } from '@/api/index';

export function* getListPokemonSaga(action) {
  try {
    const res = yield call(getListPokemon, action.payload);
    yield delay(3000);
    yield put({
      type: ActionTypes.GET_LIST_POKEMON_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
    yield put({
      type: ActionTypes.GET_LIST_POKEMON_FAIL,
      payload: error,
    });
  }
}
