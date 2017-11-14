import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const preloadedState = localStorage.state ?
    JSON.parse(localStorage.state) : {};
  let store = configureStore(preloadedState);
  // Phase 1 integration
  // store.dispatch = addLoggingToDispatch(store);

  //phase 2
  // store = applyMiddleware(store, addLoggingToDispatch, bsMw);

  const root = document.getElementById('content');
  ReactDOM.render(<Root store={store} />, root);
});

// Phase 1 version
// function addLoggingToDispatch(store) {
//   const initialDispatch = store.dispatch;
//   return action => {
//     console.log('initial store:');
//     console.log(store.getState());
//     console.log('action:');
//     console.log(action);
//     initialDispatch(action);
//     console.log('final store:');
//     console.log(store.getState());
//   };
// }

// const addLoggingToDispatch = store => next => action => {
//   console.log('initial store:');
//   console.log(store.getState());
//   console.log('action:');
//   console.log(action);
//   const result = next(action);
//   console.log('final store:');
//   console.log(store.getState());
//   return result;
// };

// phase 2
// function applyMiddleware(store,...middlewares) {
//   console.log(dispatch);
//   let dispatch = store.dispatch;
//   middlewares.forEach((mw) => {
//     dispatch = mw(store)(dispatch);
//   });
//   return Object.assign({}, store, { dispatch });
// }
