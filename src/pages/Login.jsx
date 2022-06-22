import React from 'react';
import '../styles/Login.css';
import TrybeLogo from '../components/TrybeLogo';

class Login extends React.Component {
  render() {
    return (
      <section className="login__page">
        <TrybeLogo />
      </section>
    );
  }
}

export default Login;
