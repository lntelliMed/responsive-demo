import * as actionTypes from './actionTypes';

export const changeWindowWidth = (width) => {
  return {
    type: actionTypes.CHANGE_WINDOW_WIDTH,
    width
  };
};
