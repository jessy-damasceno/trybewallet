import { CURRENCY_TYPE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case CURRENCY_TYPE:
    return {
      ...state,
      currencies: action.currency,
    };
  default:
    return {
      ...state,
    };
  }
};

export default wallet;
