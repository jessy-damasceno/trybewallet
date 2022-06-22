import React from 'react';
import TRYBE_LOGO from '../assets/Trybe_logo-baixa.png';
import CASH from '../assets/cash.png';
import '../styles/TrybeLogo.css';

export default class TrybeLogo extends React.Component {
  render() {
    return (
      <div className="trybe__wallet__logo">
        <div>
          <img src={ TRYBE_LOGO } alt="Logo da Trybe" />
          <img src={ CASH } alt="Dinheiro em papel e moedas" />
        </div>
        <span>wallet</span>
      </div>
    );
  }
}
