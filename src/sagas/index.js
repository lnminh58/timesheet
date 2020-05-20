import { takeLatest, takeEvery, all } from 'redux-saga/effects';

import * as ActionTypes from '@/store/actions/actionTypes';
import { incrementAsync } from './counter';

export default function* rootSaga() {
  yield all([
    takeEvery(ActionTypes.INCREMENT_ASYNC, incrementAsync),
  ]);
}
