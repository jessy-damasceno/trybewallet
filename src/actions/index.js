export const EMAIL_TYPE = 'EMAIL_TYPE';
export const CURRENCY_TYPE = 'CURRENCY_TYPE';
export const ADD_EXPENSE = 'ADD_EXPENSE';

const URL = 'https://economia.awesomeapi.com.br/json/all';

export const setEmail = (email) => ({
  type: EMAIL_TYPE,
  email,
});

const setCurrency = (currency) => ({
  type: CURRENCY_TYPE,
  currency,
});

export const fetchCurrencyAPI = () => (dispatch) => {
  fetch(URL).then((response) => (
    response
      .json()
      .then((data) => dispatch(setCurrency(Object
        .keys(data).filter((e) => e !== 'USDT'))))
  ));
};

export const addExpense = (expense) => (dispatch) => {
  fetch(URL).then((response) => (
    response
      .json()
      .then((data) => dispatch(() => ({
        type: ADD_EXPENSE,
        payload: {
          ...expense,
          exchangeRates: data,
        },
      })))
  ));
};
