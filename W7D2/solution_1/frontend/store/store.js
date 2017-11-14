import { createStore } from 'redux';
import rootReducer from '../reducers/root_reducer';
import { applyMiddleware } from 'redux';

const configureStore = (preloadedState = {}) => {
  let store = createStore(rootReducer, preloadedState, applyMiddleware(addLoggingToDispatch, bsMw));
  store.subscribe(() => {
    localStorage.state = JSON.stringify(store.getState());
  });
  return store;
};

const addLoggingToDispatch = store => next => action => {
  console.log('initial store:');
  console.log(store.getState());
  console.log('action:');
  console.log(action);
  const result = next(action);
  console.log('final store:');
  console.log(store.getState());
  return result;
};

// bonus
const bsMw = s => n => a => {
  console.log('this is mw2');
  return n(a);
};

export default configureStore;
