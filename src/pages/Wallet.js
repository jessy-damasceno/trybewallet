import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrencyAPI } from '../actions';
import Header from '../components/Header';
import ExpensesForms from '../components/ExpensesForms';

class Wallet extends React.Component {
  componentDidMount() {
    const { fetchAPI } = this.props;
    fetchAPI();
  }

  render() {
    return (
      <>
        <Header />
        <ExpensesForms />
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchAPI: () => dispatch(fetchCurrencyAPI()),
});

export default connect(null, mapDispatchToProps)(Wallet);

Wallet.propTypes = {
  fetchAPI: PropTypes.func.isRequired,
};
