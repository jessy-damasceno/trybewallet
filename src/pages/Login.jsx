import React from 'react';
import '../styles/Login.css';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    isDisabled: false,
  }

  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value });
  }

  handleClick = () => {
    const { email, password } = this.state;

    console.log(email.match(/\w+@[a-z]+.com/g));
    console.log(password);
  }

  render() {
    const { email, password } = this.state;
    const regExp = /\w+@[a-z]+.com/g;
    let { isDisabled } = this.state;
    const magicNumber = 6;

    if (email.match(regExp) && password.length >= magicNumber) {
      isDisabled = true;
    }

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
              onChange={ this.handleChange }
              value={ email }
            />
          </div>
          <div className="input-container">
            <input
              placeholder="senha"
              data-testid="password-input"
              type="password"
              name="password"
              id="password"
              onChange={ this.handleChange }
              value={ password }
            />
          </div>
          <button
            type="button"
            className={ !isDisabled ? 'btn disabled' : 'btn' }
            onClick={ this.handleClick }
            disabled={ !isDisabled }
          >
            Entrar
          </button>
        </form>
      </section>
    );
  }
}

export default Login;
