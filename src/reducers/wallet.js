import { CURRENCY_TYPE, ADD_EXPENSE, REMOVE_EXPENSE,
  EDIT_EXPENSE, UPDATE_EXPENSE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  expenseToEdit: {},
  editor: false, // valor booleano que indica se uma despesa está sendo editada
  idToEdit: 0, // valor numérico que armazena o id da despesa que está sendo editada
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

  case EDIT_EXPENSE:
    return {
      ...state,
      editor: true,
      idToEdit: action.idToEdit,
      expenseToEdit: action.expense,
    };

  case UPDATE_EXPENSE:
    return {
      ...state,
      expenses: action.payload,
    };

  default:
    return {
      ...state,
    };
  }
};

export default wallet;
