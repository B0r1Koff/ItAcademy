import React, { useState, useEffect } from 'react';
import Client from './Client';
import EventEmitter from './EventEmitter';
import './Client.css';

const ClientList = ({ clients, setClients }) => {
  const [filter, setFilter] = useState('all');
  const [editingClientId, setEditingClientId] = useState(null);

  const handleEditClient = (oldClient, updatedClient) => {
    setEditingClientId(null);
    setClients((prevClients) =>
      prevClients.map((client) => (client.id === oldClient.id ? updatedClient : client))
    );
  };

  const handleDeleteClient = (clientToDelete) => {
    setClients((prevClients) => prevClients.filter((client) => client.id !== clientToDelete.id));
  };

  const handleToggleEdit = (clientId) => {
    setEditingClientId((prevId) => (prevId === clientId ? null : clientId));
  };

  const handleCancelEdit = () => {
    setEditingClientId(null);
  };

  const handleAddNewClient = () => {
    const newClientId = clients.length + 1;
    const newClient = {
      id: newClientId,
      lastName: 'Новый',
      firstName: 'Клиент',
      middleName: '',
      balance: 0,
      active: true,
    };
    setClients((prevClients) => [...prevClients, newClient]);
  };

  useEffect(() => {
    EventEmitter.on('editClient', handleEditClient);
    EventEmitter.on('deleteClient', handleDeleteClient);
    EventEmitter.on('cancelEdit', handleCancelEdit);

    return () => {
      EventEmitter.off('editClient', handleEditClient);
      EventEmitter.off('deleteClient', handleDeleteClient);
      EventEmitter.off('cancelEdit', handleCancelEdit);
    };
  }, [clients, setClients]);

  const filteredClients =
    filter === 'all' ? clients : clients.filter((client) => client.active === (filter === 'active'));

  return (
    <div>
      <div>
        Фильтр:{' '}
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">Все</option>
          <option value="active">Активные</option>
          <option value="blocked">Заблокированные</option>
        </select>
      </div>

      <div className='row'>
        <span className='col'>Фамилия</span>
        <span className='col'>Имя</span>
        <span className='col'>Отчество</span>
        <span className='col'>Баланс</span>
        <span className='col'>Статус</span>
        <span className='col'>Действие</span>
      </div>

      {filteredClients.map((client) => (
        <div key={client.id}>
          <Client client={client} isEditing={client.id === editingClientId} onToggleEdit={handleToggleEdit} />
        </div>
      ))}

      <div>
        <button onClick={handleAddNewClient}>Добавить клиента</button>
      </div>
    </div>
  );
};

export default ClientList;