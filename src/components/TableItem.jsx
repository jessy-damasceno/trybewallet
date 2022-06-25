import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeExpense, editExpense } from '../actions';

class TableItem extends React.Component {
  render() {
    const { description, tag, method, id,
      value, currency, exchangeRates,
      removeExpenseAction, editExpenseAction } = this.props;
    const { name, ask } = exchangeRates[currency];
    const expense = { id, value, description, currency, method, tag };
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
          <button
            data-testid="edit-btn"
            type="button"
            onClick={ () => editExpenseAction(id, expense) }
          >
            <i className="ph-pencil-simple-line" />
          </button>
          <button
            data-testid="delete-btn"
            type="button"
            onClick={ () => removeExpenseAction(id) }
          >
            <i className="ph-trash-simple" />
          </button>
        </td>
      </tr>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  removeExpenseAction: (param) => dispatch(removeExpense(param)),
  editExpenseAction: (idToEdit, expense) => dispatch(editExpense(idToEdit, expense)),
});

export default connect(null, mapDispatchToProps)(TableItem);

TableItem.propTypes = {
  description: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  tag: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  removeExpenseAction: PropTypes.func.isRequired,
  editExpenseAction: PropTypes.func.isRequired,
  currency: PropTypes.string.isRequired,
  exchangeRates: PropTypes.shape({
    name: PropTypes.string,
    ask: PropTypes.string,
  }).isRequired,
};
