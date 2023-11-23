import React, { Component } from 'react';
import ClientList from './components/ClientList';
import './App.css';

class App extends Component {
  state = {
    clients: [
      { id: 1, lastName: 'Иванов', firstName: 'Иван', middleName: 'Иванович', balance: 1000, active: true },
      { id: 2, lastName: 'Петров', firstName: 'Петр', middleName: 'Петрович', balance: 1500, active: false },
    ],
  };

  render() {
    return (
      <div className='App'>
        <ClientList clients={this.state.clients} />
      </div>
    );
  }
}

export default App;
