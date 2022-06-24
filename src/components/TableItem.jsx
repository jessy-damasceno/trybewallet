import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeExpense } from '../actions';

class TableItem extends React.Component {
  render() {
    const { description, tag, method, id,
      value, currency, exchangeRates, removeExpenseAction } = this.props;
    const { name, ask } = exchangeRates[currency];
    return (
      <tr>
        <td>{description}</td>
        <td>{tag}</td>
        <td>{method}</td>
        <td>{Number(value).toFixed(2)}</td>
        <td>{name.split('/')[0]}</td>
        <td>{Number(ask).toFixed(2)}</td>
        <td>{(value * ask).toFixed(2)}</td>
        <td>Real</td>
        <td>
          {/* <button type="button" onClick={ removeExpenseAction() }>Editar</button> */}
          <button
            data-testid="delete-btn"
            type="button"
            onClick={ () => removeExpenseAction(id) }
          >
            Excluir
          </button>
        </td>
      </tr>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  removeExpenseAction: (param) => dispatch(removeExpense(param)),
});

export default connect(null, mapDispatchToProps)(TableItem);

TableItem.propTypes = {
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  removeExpenseAction: PropTypes.func.isRequired,
  currency: PropTypes.string.isRequired,
  exchangeRates: PropTypes.objectOf({
    name: PropTypes.string,
    ask: PropTypes.string,
  }).isRequired,
};
