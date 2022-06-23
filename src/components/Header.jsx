import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import TrybeLogo from './TrybeLogo';
import '../styles/Header.css';

class Header extends React.Component {
  render() {
    const { email, expenses } = this.props;

    const total = expenses?.reduce((acc, expense) => {
      const { value, currency, exchangeRates } = expense;
      const { ask } = exchangeRates[currency];

      acc += (value * ask);
      return acc;
    }, 0).toFixed(2);

    return (
      <header>
        <div className="header__wallet_exchange container">
          <TrybeLogo />
          <p data-testid="email-field">{email}</p>
        </div>

        <div className="header__wallet_exchange">
          <section className="header__wallet_field">
            <div className="total_field red">
              <i className="ph-folder-minus" />
            </div>
            <span data-testid="total-field">{total}</span>
          </section>

          <section className="header__wallet_field">
            <div className="currency_field yellow">
              <i className="ph-coins" />
            </div>
            <span data-testid="header-currency-field">BRL</span>
          </section>
          <Link to="/" className="header_exit circle">
            <i className="ph-sign-out" />
            <span>Sair</span>
          </Link>
        </div>
      </header>
    );
  }
}

const mapStateToProps = ({ user, wallet }) => ({
  email: user.email,
  expenses: wallet.expenses,
});

export default connect(mapStateToProps, null)(Header);

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
};
