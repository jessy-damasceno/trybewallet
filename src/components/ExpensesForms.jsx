import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addExpense, updateExpense } from '../actions';
import '../styles/ExpensesForms.css';

const INITIAL_STATE = {
  id: 0,
  value: '0',
  description: '',
  currency: 'USD',
  method: 'Dinheiro',
  tag: 'Alimentação',
};

class ExpensesForms extends React.Component {
  state = {
    ...INITIAL_STATE,
  };

  // updateForm = () => {

  // }

  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value });
  }

  handleClick = () => {
    const { addExpenseToGlobalState, editor } = this.props;

    if (editor) {
      const { expenseToEdit, updateExpenseAction, idToEdit: id } = this.props;
      updateExpenseAction({ ...expenseToEdit, ...this.state, id,
      });
      this.setState({ ...INITIAL_STATE });
    } else {
      addExpenseToGlobalState(this.state);
      this.setState(({ id }) => ({ ...INITIAL_STATE, id: id + 1 }));
    }
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
    const { currencies, editor } = this.props;

    return (
      <form className="form">
        <div className="form-group">
          <label htmlFor="value">
            VALOR:
            <input
              type="text"
              data-testid="value-input"
              placeholder="0,00"
              id="value"
              name="value"
              onChange={ this.handleChange }
              value={ value }
            />
          </label>
        </div>

        <div className="form-group">
          <label htmlFor="description">
            DESCRIÇÃO:
            <input
              type="text"
              data-testid="description-input"
              placeholder="Ex.: Cachorro quente"
              id="description"
              name="description"
              onChange={ this.handleChange }
              value={ description }
            />
          </label>
        </div>

        <div className="form-group">
          <label htmlFor="currency">
            MOEDA:
            <select
              id="currency"
              name="currency"
              onChange={ this.handleChange }
              value={ currency }
            >
              {currencies.map((currencie) => (
                <option
                  key={ currencie }
                >
                  {currencie}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="form-group">
          <label htmlFor="method">
            MÉTODO DE PAGAMENTO:
            <select
              data-testid="method-input"
              id="method"
              name="method"
              onChange={ this.handleChange }
              value={ method }
            >
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>
        </div>

        <div className="form-group">
          <label htmlFor="tag">
            TAG:
            <select
              data-testid="tag-input"
              id="tag"
              name="tag"
              onChange={ this.handleChange }
              value={ tag }
            >
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>
        </div>

        <button
          className="form-btn"
          type="button"
          onClick={ this.handleClick }
        >
          {editor ? 'Editar despesa' : 'Adicionar despesa'}
        </button>
      </form>
    );
  }
}

const mapStateToProps = ({ wallet }) => ({
  currencies: wallet.currencies,
  editor: wallet.editor,
  idToEdit: wallet.idToEdit,
  expenseToEdit: wallet.expenseToEdit,
});

const mapDispatchToProps = (dispatch) => ({
  addExpenseToGlobalState: (expense) => dispatch(addExpense(expense)),
  updateExpenseAction: (expense) => dispatch(updateExpense(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesForms);

ExpensesForms.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  addExpenseToGlobalState: PropTypes.func.isRequired,
  updateExpenseAction: PropTypes.func.isRequired,
  editor: PropTypes.bool.isRequired,
  expenseToEdit: PropTypes.shape({
    description: PropTypes.string,
    id: PropTypes.number,
    tag: PropTypes.string,
    method: PropTypes.string,
    value: PropTypes.string,
  }),
  idToEdit: PropTypes.number.isRequired,
};

ExpensesForms.defaultProps = {
  expenseToEdit: {},
};
