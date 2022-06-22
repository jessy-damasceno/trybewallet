import React from 'react';
import '../styles/Login.css';

class Login extends React.Component {
  render() {
    return (
      <section className="login__page">
        <form>
          <span className="text-center">login</span>
          <div className="input-container">
            <input
              placeholder="e-mail"
              data-testid="email-input"
              type="email"
              name="email"
              id="email"
            />
          </div>
          <div className="input-container">
            <input
              placeholder="senha"
              data-testid="password-input"
              type="password"
              name="email"
            />
          </div>
          <button type="button" className="btn">Entrar</button>
        </form>
      </section>
    );
  }
}

export default Login;
