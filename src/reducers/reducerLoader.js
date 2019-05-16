import { actionTypes } from '../helpers/actionTypes.js';

const { LOADING, SUCCESS, FAIL } = actionTypes;

const initialState = {
  message: '',
  isLoading: 0
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOADING:
      return {
        ...state,
        isLoading: state.isLoading++
      };

    case SUCCESS:
      return {
        ...state,
        isLoading: state.isLoading--
      };

    case FAIL:
      return {
        ...state,
        message: payload.message,
        isLoading: state.isLoading--
      };

    default:
      return state;
  }
}