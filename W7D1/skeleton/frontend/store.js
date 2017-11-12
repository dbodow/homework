import { createStore } from 'redux';
import reducer from './reducer';

//test
window.reducer = reducer;

const store = createStore(reducer);

export default store;
