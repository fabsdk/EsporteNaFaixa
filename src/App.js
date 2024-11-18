import React, { useState } from 'react';
import './Styles/Style.css';
import { FaHome, FaUsers, FaMapMarkerAlt, FaCalendarAlt, FaComments, FaQuestionCircle } from 'react-icons/fa';
import Communities from './pages/Communities';
import Events from './pages/Events';
import Help from './pages/Help';
import Home from './pages/Home';
import Locations from './pages/Locations';


function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activePage, setActivePage] = useState('home');

  const toggleSidebar = () => {
    if (window.innerWidth <= 768) {
      setSidebarOpen(!sidebarOpen);
    }
  };

  const renderContent = () => {
    switch (activePage) {
      case 'home':
        return <Home />;
      case 'locations':
        return <Locations />;
      case 'communities':
        return <Communities />;
      case 'events':
        return <Events />;
      case 'help':
        return <Help />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="container">
      <button className="menu-button" onClick={toggleSidebar}>
        ☰
      </button>

      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <h2>Esporte na Faixa</h2>
        <ul>
          <li onClick={() => setActivePage('home')}><FaHome /><a href="#home">Página Inicial</a></li>
          <li onClick={() => setActivePage('locations')}><FaMapMarkerAlt /><a href="#locations">Locais</a></li>
          <li onClick={() => setActivePage('communities')}><FaComments /><a href="#communities">Comunidades</a></li>
          <li onClick={() => setActivePage('events')}><FaCalendarAlt /><a href="#events">Eventos</a></li>
          <li onClick={() => setActivePage('help')}><FaQuestionCircle /><a href="#help">Ajuda</a></li>
        </ul>
      </div>
      
      <div className="content">
        {renderContent()}
      </div>
    </div>
  );
}

export default App;
