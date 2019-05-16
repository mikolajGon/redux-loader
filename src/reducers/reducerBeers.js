import { actionTypes } from '../helpers/actionTypes.js';

const { GET_BEER_LIST, GET_ACTIVE_BEER } = actionTypes;

const initialState = {
  list: null,
  active: null
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_BEER_LIST:
      return {
        ...state,
        list: payload
      };

    case GET_ACTIVE_BEER:
      return {
        ...state,
        active: payload
      };
    default:
      return state;
  }
}