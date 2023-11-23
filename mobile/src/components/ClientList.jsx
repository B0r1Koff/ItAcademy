import React, { PureComponent } from 'react';
import Client from './Client';
import './Client.css'

class ClientList extends PureComponent {
  state = {
    clients: [
      { id: 1, lastName: 'Иванов', firstName: 'Иван', middleName: 'Иванович', balance: 1000, active: true },
      { id: 2, lastName: 'Петров', firstName: 'Петр', middleName: 'Петрович', balance: 1500, active: false },
    ],
    filter: 'all',
    editingClientId: null,
  };

  handleEditClient = (oldClient, updatedClient) => {
    this.setState((prevState) => ({
      clients: prevState.clients.map((client) => (client.id === oldClient.id ? updatedClient : client)),
      editingClientId: null,
    }));
  };

  handleDeleteClient = (clientToDelete) => {
    this.setState((prevState) => ({
      clients: prevState.clients.filter((client) => client.id !== clientToDelete.id),
    }));
  };

  handleAddClient = (newClient) => {
    this.setState((prevState) => ({ clients: [...prevState.clients, newClient] }));
  };

  handleToggleEdit = (clientId) => {
    this.setState((prevState) => ({ editingClientId: prevState.editingClientId === clientId ? null : clientId }));
  };

  handleAddNewClient = () => {
    const newClientId = this.state.clients.length + 1;
    const newClient = {
      id: newClientId,
      lastName: 'Новый',
      firstName: 'Клиент',
      middleName: '',
      balance: 0,
      active: true,
    };
    this.setState((prevState) => ({ clients: [...prevState.clients, newClient] }));
  };

  render() {
    console.log('Рендер списка');
    const { clients, filter, editingClientId } = this.state;
    const filteredClients =
      filter === 'all' ? clients : clients.filter((client) => client.active === (filter === 'active'));

    return (
      <div>
        <div>
          Фильтр:{' '}
          <select value={filter} onChange={(e) => this.setState({ filter: e.target.value })}>
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
          <div key={client.id}>
            <Client
              client={client}
              isEditing={client.id === editingClientId}
              onToggleEdit={this.handleToggleEdit}
              onEditClient={this.handleEditClient}
              onDeleteClient={this.handleDeleteClient}
              onCancelEdit={this.handleToggleEdit}
            />
          </div>
        ))}
        <div>
          <button onClick={this.handleAddNewClient}>Добавить клиента</button>
        </div>
      </div>
    );
  }
}

export default ClientList;
