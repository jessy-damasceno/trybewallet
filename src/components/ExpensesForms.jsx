import React from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';

const INITIAL_STATE = {
  value: '',
  description: '',
  currency: 'USD',
  method: 'Dinheiro',
  tag: 'Alimentação',
};

class ExpensesForms extends React.Component {
  state = {
    ...INITIAL_STATE,
  };

  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value });
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
    const { currencies } = this.props;

    return (
      <form>
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
      </form>
    );
  }
}

const mapStateToProps = ({ wallet }) => ({
  currencies: wallet.currencies,
});

export default connect(mapStateToProps, null)(ExpensesForms);

ExpensesForms.propTypes = {
  currencies: Proptypes.arrayOf(Proptypes.string).isRequired,
};
