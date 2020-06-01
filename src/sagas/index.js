import { takeLatest, takeEvery, all } from 'redux-saga/effects';

import * as ActionTypes from '@/store/actions/actionTypes';
import { incrementAsync } from './counter';
import { getListPokemonSaga } from './pokemon';

export default function* rootSaga() {
  yield all([
    takeEvery(ActionTypes.INCREMENT_ASYNC, incrementAsync),
    takeLatest(ActionTypes.GET_LIST_POKEMON_REQUEST, getListPokemonSaga),
  ]);
}
