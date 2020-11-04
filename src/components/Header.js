import React from 'react';
import logo from '../images/logo.svg';

function Header() {
  return (
    <>
      <header class="header">
        <img src={logo} class="header__logo" alt="Логотип сервиса" />
      </header>
    </>
  )
}

export default Header;
