import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  width: window.width
};

const setWindowWidth = (state, action) => {
  return updateObject(state, {
    width: action.width
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_WINDOW_WIDTH: return setWindowWidth(state, action);
    default: return state;
  }
}

export default reducer;
