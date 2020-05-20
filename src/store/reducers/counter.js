import * as ActionTypes from '@/store/actions/actionTypes';

export const initialState = {
  counter: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.INCREMENT: {
      return {
        ...state,
        counter: state.counter + action.payload,
      };
    }

    case ActionTypes.DECREMENT: {
      return {
        ...state,
        counter: state.counter - action.payload,
      };
    }

    default:
      return state;
  }
};

export default counterReducer;
