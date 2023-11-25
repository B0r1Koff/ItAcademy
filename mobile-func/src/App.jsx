import React, { useState } from 'react';
import ClientList from './components/ClientList';

const App = () => {
  const [clients, setClients] = useState([
    { id: 1, lastName: 'Иванов', firstName: 'Иван', middleName: 'Иванович', balance: 1000, active: true },
    { id: 2, lastName: 'Петров', firstName: 'Петр', middleName: 'Петрович', balance: 1500, active: false },
  ]);

  return (
    <div>
      <ClientList clients={clients} setClients={setClients} />
    </div>
  );
};

export default App;