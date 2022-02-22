import { createStore, combineReducers, applyMiddleware } from 'react-redux';
import logger from 'redux-logger';
import booksReducer from './books/books';

const reducer = combineReducers({
  booksReducer,
});

const store = createStore(reducer, applyMiddleware(logger));

export default store;
