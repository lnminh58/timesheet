import * as ActionTypes from './actionTypes';

export const increaseCounter = value => ({
  type: ActionTypes.INCREMENT,
  payload: value,
});

export const increaseCounterAsync = value => ({
  type: ActionTypes.INCREMENT_ASYNC,
  payload: value,
});

export const decreaseCounter = value => ({
  type: ActionTypes.DECREMENT,
  payload: value,
});
