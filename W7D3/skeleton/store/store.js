import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/root_reducer';
import logger from 'redux-logger';

export const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk, logger));
};
