import { CURRENCY_TYPE, ADD_EXPENSE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case CURRENCY_TYPE:
    return {
      ...state,
      currencies: action.currency,
    };

  case ADD_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };

  default:
    return {
      ...state,
    };
  }
};

export default wallet;
