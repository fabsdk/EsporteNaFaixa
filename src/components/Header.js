import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Style.css';

const Header = () => (
  <header>
    <h1>Esporte na Faixa</h1>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">Sobre</Link>
    </nav>
  </header>
);

export default Header;
