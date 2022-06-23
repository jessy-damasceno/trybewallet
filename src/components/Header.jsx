import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import TrybeLogo from './TrybeLogo';
import '../styles/Header.css';

class Header extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <header>
        <TrybeLogo />
        <section className="header__wallet_exchange">
          <section className="header__wallet_field">
            <div className="currency_field yellow">
              <i className="ph-coins" />
            </div>
            <span data-testid="header-currency-field">BRL</span>
          </section>

          <section className="header__wallet_field">
            <div className="total_field red">
              <i className="ph-folder-minus" />
            </div>
            <span data-testid="total-field">0</span>
          </section>

          <span data-testid="email-field">{email}</span>
          <Link to="/" className="header_exit circle">
            <i className="ph-sign-out" />
            <span>Sair</span>
          </Link>
        </section>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps, null)(Header);

Header.propTypes = {
  email: PropTypes.string.isRequired,
};
