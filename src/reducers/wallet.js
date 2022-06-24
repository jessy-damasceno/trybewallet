import { CURRENCY_TYPE, ADD_EXPENSE, REMOVE_EXPENSE } from '../actions';

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

  case REMOVE_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.filter((e) => e.id !== action.id),
    };

  default:
    return {
      ...state,
    };
  }
};

export default wallet;
