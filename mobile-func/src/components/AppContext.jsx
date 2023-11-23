import React, { createContext, useContext, useState, useEffect } from 'react';
import { EventEmitter } from 'events';

const AppContext = createContext();

export const AppProvider = ({ children, initialClients }) => {
  const [clients, setClients] = useState(initialClients);
  const [filter, setFilter] = useState('all');
  const [editingClientId, setEditingClientId] = useState(null);
  const eventEmitter = new EventEmitter();

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

  useEffect(() => {
    eventEmitter.on('editClient', handleEditClient);
    eventEmitter.on('toggleEdit', handleToggleEdit);
    eventEmitter.on('deleteClient', handleDeleteClient);
    eventEmitter.on('addNewClient', handleAddClient);

    return () => {
      eventEmitter.removeAllListeners();
    };
  }, [eventEmitter]);

  return (
    <AppContext.Provider
      value={{
        clients,
        filter,
        editingClientId,
        eventEmitter,
        setFilter,
        handleAddNewClient,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
