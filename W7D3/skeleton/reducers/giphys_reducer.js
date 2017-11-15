import { RECEIVE_SEARCH_GIPHYS } from '../actions/giphy_actions';

const defaultState = [];

export const giphysReducer = (state = defaultState, action) => {
  switch(action.type) {
    case RECEIVE_SEARCH_GIPHYS:
      return action.giphys;
    default:
      return state;
  }
};
