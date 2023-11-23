import React from 'react';
import ClientList from './components/ClientList';
import { AppProvider } from './components/AppContext';

const App = () => {
  const clients = [
    { id: 1, lastName: 'Иванов', firstName: 'Иван', middleName: 'Иванович', balance: 1000, active: true },
    { id: 2, lastName: 'Петров', firstName: 'Петр', middleName: 'Петрович', balance: 1500, active: false },
  ];

  return (
    <AppProvider initialClients={clients}>
      <ClientList />
    </AppProvider>
  );
};

export default App;
