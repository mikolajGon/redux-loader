import { actionTypes } from '../helpers/actionTypes.js';
import { BEER_LIST, RANDOM_BEER } from '../helpers/beerEndpoints';
import axios from 'axios';

const { LOADING, SUCCESS, FAIL, GET_BEER_LIST, GET_ACTIVE_BEER } = actionTypes;

// FLUX PATTERN
const actionCreator = type => payload => ({ type, payload });

const loadStart = actionCreator(LOADING);
const loadSuccess = actionCreator(SUCCESS);
const loadFail = actionCreator(FAIL);

export const getBeerList = () => async dispatch => {
  try {
    dispatch(loadStart());
    const res = await axios.get(BEER_LIST);

    dispatch(loadSuccess());
    dispatch({
      type: GET_BEER_LIST,
      payload: res.data
    });
  } catch (e) {
    dispatch(loadFail(e));
  }
}

export const getRandomBeer = () => async dispatch => {
  try {
    dispatch(loadStart());
    const res = await axios.get(RANDOM_BEER);

    dispatch(loadSuccess());
    dispatch({
      type: GET_ACTIVE_BEER,
      payload: res.data[0]
    });
  } catch (e) {
    dispatch(loadFail(e));
  }
}

export const setActiveBeer = actionCreator(GET_ACTIVE_BEER);