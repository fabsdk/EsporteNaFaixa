import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Style.css';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`menu ${isOpen ? 'open' : ''}`}>
      {isOpen && (
        <div className="menu-items">
          <Link to="/">Página Inicial</Link>
          <Link to="/connections">Suas Conexões</Link>
          <Link to="/locations">Locais</Link>
          <Link to="/events">Eventos</Link>
          <Link to="/communities">Comunidades</Link>
          <Link to="/help">Ajuda</Link>
        </div>
      )}
    </div>
  );
};

export default Menu;
