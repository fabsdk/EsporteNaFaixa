import React, { useState } from 'react';
import Menu from '../components/Menu';
import '../Styles/Locations.css';

const Locations = () => {
  const [filter, setFilter] = useState('');
  const [locations, setLocations] = useState([
    { id: 1, name: 'Centro Esportivo Ibirapuera', sport: 'Ballet' },
    { id: 2, name: 'Centro Esportivo Ibirapuera', sport: 'Ginástica' },
    { id: 3, name: 'Centro Esportivo Ibirapuera', sport: 'Judô' },
    { id: 5, name: 'Centro Esportivo Ibirapuera', sport: 'Jiu Jitsu' },
    { id: 6, name: 'Centro Esportivo Ibirapuera', sport: 'Kung Fu' },
    { id: 7, name: 'Centro Esportivo Ibirapuera', sport: 'Patinação' },
    { id: 8, name: 'Centro Esportivo Ibirapuera', sport: 'Taekwondo' },
    { id: 9, name: 'Centro Esportivo Ibirapuera', sport: 'Tai Chi Chuan' },
    { id: 10, name: 'Centro Esportivo Ibirapuera', sport: 'Tênis de Campo' },
    { id: 11, name: 'Centro Esportivo Ibirapuera', sport: 'Yoga' },
    { id: 12, name: 'Centro Esportivo Santo Amaro', sport: 'Academias ao ar livre' },
    { id: 12, name: 'Centro Esportivo Santo Amaro', sport: 'Judô' },
    { id: 12, name: 'Centro Esportivo Santo Amaro', sport: 'Boxe' },
    { id: 12, name: 'Centro Esportivo Santo Amaro', sport: 'Basquete' },
  ]);

  const filteredLocations = locations.filter((location) =>
    location.sport.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <Menu />
      <h1>Locais</h1>
      <input
        type="text"
        placeholder="Filtrar por esporte"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="search-bar"
      />
      <div className="location-list">
        {filteredLocations.length > 0 ? (
          filteredLocations.map((location) => (
            <div key={location.id} className="location-card">
              <h3>{location.name}</h3>
              <p>{location.sport}</p>
            </div>
          ))
        ) : (
          <p>Nenhum local encontrado.</p>
        )}
      </div>
    </div>
  );
};

export default Locations;
