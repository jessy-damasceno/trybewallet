import React from 'react';
import PropTypes from 'prop-types';

export default class TableItem extends React.Component {
  render() {
    const { description, tag, method, value, currency, exchangeRates } = this.props;
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
        <td>editar / excluir</td>
      </tr>
    );
  }
}

TableItem.propTypes = {
  description: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  exchangeRates: PropTypes.objectOf({
    name: PropTypes.string,
    ask: PropTypes.string,
  }).isRequired,
};
