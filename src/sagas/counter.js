import { put } from 'redux-saga/effects';
import * as ActionTypes from '@/store/actions/actionTypes';

const delay = ms => new Promise(res => setTimeout(res, ms));

export function* incrementAsync(action) {
  try {
    yield delay(1000);
    yield put({ type: ActionTypes.INCREMENT, payload: action.payload });
  } catch (error) {
    console.log(error);
  }
}
