
import { combineReducers } from 'redux';
import loader from './reducerLoader';
import beers from './reducerBeers';

export default combineReducers({
  loader,
  beers
});