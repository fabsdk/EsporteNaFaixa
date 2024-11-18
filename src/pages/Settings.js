import React, { useState } from 'react';
import Menu from '../components/Menu';
import '../Styles/Style.css';

const Settings = () => {
  const [settings, setSettings] = useState({
    email: 'user@example.com',
    password: '',
    interests: [],
  });

  const handleUpdateSettings = (field, value) => {
    setSettings({ ...settings, [field]: value });
  };

  return (
    <div>
      <Menu />
      <h1>Configurações</h1>
      <div className="settings-form">
        <label>
          E-mail:
          <input
            type="email"
            value={settings.email}
            onChange={(e) => handleUpdateSettings('email', e.target.value)}
          />
        </label>
        <label>
          Nova senha:
          <input
            type="password"
            value={settings.password}
            onChange={(e) => handleUpdateSettings('password', e.target.value)}
          />
        </label>
        <button>Salvar Alterações</button>
      </div>
    </div>
  );
};

export default Settings;
