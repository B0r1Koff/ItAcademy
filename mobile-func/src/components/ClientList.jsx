// ClientList.jsx
import React, { useState } from 'react';
import Client from './Client';

const ClientList = () => {
  const [clients, setClients] = useState([
    { id: 1, lastName: 'Иванов', firstName: 'Иван', middleName: 'Иванович', balance: 1000, active: true },
    { id: 2, lastName: 'Петров', firstName: 'Петр', middleName: 'Петрович', balance: 1500, active: false },
  ]);
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

  const handleAddClient = (newClient) => {
    setClients((prevClients) => [...prevClients, newClient]);
  };

  const handleToggleEdit = (clientId) => {
    setEditingClientId((prevId) => (prevId === clientId ? null : clientId));
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
            <span className='col'>
              Фамилия
            </span>
            <span className='col'>
              Имя 
            </span>
            <span className='col'>
              Отчество
            </span>
            <span className='col'>
              Баланс
            </span>
            <span className='col'>
              Статус
            </span>
            <span className='col'>
              Действие
            </span>
          </div>
          {filteredClients.map((client) => (
            <Client
              key={client.id}
              client={client}
              isEditing={client.id === editingClientId}
              onToggleEdit={handleToggleEdit}
              onEditClient={handleEditClient}
              onDeleteClient={handleDeleteClient}
              onCancelEdit={handleToggleEdit}
            />
          ))}
      <div>
        <button onClick={handleAddNewClient}>Добавить нового клиента</button>
      </div>
    </div>
  );
};

export default ClientList;
