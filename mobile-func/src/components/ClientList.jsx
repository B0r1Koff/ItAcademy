import React, { useEffect } from 'react';
import Client from './Client';
import { useAppContext } from './AppContext';
import './Client.css';

const ClientList = () => {
  const { clients, filter, editingClientId, eventEmitter, setFilter, handleAddNewClient } = useAppContext();

  const handleEditClient = (oldClient, updatedClient) => {
    eventEmitter.emit('editClient', oldClient, updatedClient);
  };

  const handleDeleteClient = (clientToDelete) => {
    eventEmitter.emit('deleteClient', clientToDelete);
  };

  const handleToggleEdit = (clientId) => {
    eventEmitter.emit('toggleEdit', clientId);
  };

  useEffect(() => {
    const handleFilterChange = (newFilter) => {
      setFilter(newFilter);
    };

    eventEmitter.on('filterChange', handleFilterChange);

    return () => {
      eventEmitter.off('filterChange', handleFilterChange);
    };
  }, [eventEmitter, setFilter]);

  const filteredClients = filter === 'all' ? clients : clients.filter((client) => client.active === (filter === 'active'));

  return (
    <div>
      <div>
        Фильтр:{' '}
        <select value={filter} onChange={(e) => eventEmitter.emit('filterChange', e.target.value)}>
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
