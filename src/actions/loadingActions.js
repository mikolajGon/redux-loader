import { actionTypes } from '../helpers/actionTypes.js';
import { BEER_LIST, RANDOM_BEER } from '../helpers/beerEndpoints';

const { LOADING, SUCCESS, FAIL, GET_BEER_LIST, GET_ACTIVE_BEER } = actionTypes;

// FLUX PATTERN
const actionCreator = type => payload => ({ type, payload });

const loadStart = actionCreator(LOADING);
const loadSuccess = actionCreator(SUCCESS);
const loadFail = actionCreator(FAIL);

export const getBeerList = () => async dispatch => {
	try {
		dispatch(loadStart());
		const res = await fetch(BEER_LIST);
		const data = await res.json();

		dispatch(loadSuccess());
		dispatch({
		  type: GET_BEER_LIST,
		  payload: data
		});
	} catch (e) {
		dispatch(loadFail(e));
	}
};

export const getRandomBeer = () => async dispatch => {
	try {
		dispatch(loadStart());
		const res = await fetch(RANDOM_BEER);
		const data = await res.json();

		dispatch(loadSuccess());
		dispatch({
			type: GET_ACTIVE_BEER,
			payload: data[0]
		});
	} catch (e) {
		dispatch(loadFail(e));
	}
};

export const setActiveBeer = actionCreator(GET_ACTIVE_BEER);
