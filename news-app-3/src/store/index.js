import { createStore, applyMiddleware } from 'redux';
import { thunk }  from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducer';

// const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))
const store = createStore(reducer, applyMiddleware(thunk))

export default store
