import React from 'react';
import Menu from '../components/Menu';
import '../Styles/Help.css';

const Help = () => (
  <div className="help-container">
    <Menu />
    <div className="main-content">
      <h1>Ajuda</h1>
      <p>Entre em contato pelo e-mail <a href="mailto:contatoesportenafaixa@gmail.com">contatoesportenafaixa@gmail.com</a> para resolver dúvidas ou problemas.</p>
      <p>Você também pode buscar ou contribuir para a nossa base de conhecimento com perguntas e respostas frequentes.</p>
    </div>
  </div>
);

export default Help;
