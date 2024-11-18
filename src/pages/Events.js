import React, { useState, useEffect } from 'react';
import Menu from '../components/Menu';
import '../Styles/Events.css';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({ title: '', date: '', time: '', location: '' });
  const [editingEventId, setEditingEventId] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const savedEvents = localStorage.getItem('events');
    if (savedEvents) {
      setEvents(JSON.parse(savedEvents));
    }
  }, []);

  const saveEventsToLocalStorage = (updatedEvents) => {
    localStorage.setItem('events', JSON.stringify(updatedEvents));
  };

  const handleEvent = () => {
    if (!newEvent.title || !newEvent.date || !newEvent.time || !newEvent.location) {
      setErrorMessage('Por favor, preencha todos os campos.');
      return;
    }

    const dateTime = `${newEvent.date}T${newEvent.time}`;
    const updatedEvent = { id: editingEventId || events.length + 1, ...newEvent, dateTime };

    if (editingEventId) {
      const updatedEvents = events.map((event) =>
        event.id === editingEventId ? updatedEvent : event
      );
      setEvents(updatedEvents);
      saveEventsToLocalStorage(updatedEvents);
      setEditingEventId(null);
    } else {
      const updatedEvents = [updatedEvent, ...events];
      setEvents(updatedEvents);
      saveEventsToLocalStorage(updatedEvents);
    }

    setNewEvent({ title: '', date: '', time: '', location: '' });
    setErrorMessage('');
  };

  const handleDelete = (eventId) => {
    const updatedEvents = events.filter((event) => event.id !== eventId);
    setEvents(updatedEvents);
    saveEventsToLocalStorage(updatedEvents);
  };

  const handleEdit = (eventId) => {
    const eventToEdit = events.find((event) => event.id === eventId);
    const [date, time] = eventToEdit.dateTime.split('T');
    setNewEvent({ title: eventToEdit.title, date, time, location: eventToEdit.location });
    setEditingEventId(eventId);
  };

  return (
    <div>
      <Menu />
      <h1>Eventos</h1>

      <div className="add-event-container">
        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <input
          className="event-input"
          type="text"
          placeholder="Título do Evento"
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
        />
        <input
          className="event-input"
          type="date"
          value={newEvent.date}
          onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
        />
        <input
          className="event-input"
          type="time"
          value={newEvent.time}
          onChange={(e) => setNewEvent({ ...newEvent, time: e.target.value })}
        />
        <input
          className="event-input"
          type="text"
          placeholder="Local do Evento"
          value={newEvent.location}
          onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })}
        />
        <button className="event-button" onClick={handleEvent}>
          {editingEventId ? 'Atualizar Evento' : 'Adicionar Evento'}
        </button>
      </div>

      <div className="event-list">
        {events.length === 0 ? (
          <p className="empty-message">Nenhum evento cadastrado.</p>
        ) : (
          events.map((event) => (
            <div key={event.id} className="event-card">
              <h3>{event.title}</h3>
              <p>
                <strong>Data:</strong> {new Date(event.dateTime).toLocaleDateString()}
              </p>
              <p>
                <strong>Hora:</strong> {new Date(event.dateTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
              <p>
                <strong>Local:</strong> {event.location}
              </p>
              <div className="event-actions">
                <button onClick={() => handleEdit(event.id)}>Editar</button>
                <button onClick={() => handleDelete(event.id)} className="delete-button">
                  Excluir
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Events;
