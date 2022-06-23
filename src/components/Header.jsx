import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TrybeLogo from './TrybeLogo';
import '../styles/Header.css';

class Header extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <header>
        <TrybeLogo />
        <span data-testid="email-field">{email}</span>
        <i className="ph-sign-out" />
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
