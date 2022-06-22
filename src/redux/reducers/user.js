import { EMAIL_TYPE } from '../actions';

const INITIAL_STATE = {
  email: '',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case EMAIL_TYPE:
    return {
      ...state,
      email: action.email,
    };
  default:
    return {
      ...state,
    };
  }
};

export default user;
