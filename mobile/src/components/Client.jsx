import React, { PureComponent } from 'react';
import './Client.css'

class Client extends PureComponent {
  handleEdit = () => {
    const { client, onEditClient } = this.props;
    const lastName = this.lastNameInput.value.trim();
    const firstName = this.firstNameInput.value.trim();
    const middleName = this.middleNameInput.value.trim();
    const balance = parseFloat(this.balanceInput.value);

    if (lastName === '' || firstName === '' || isNaN(balance)) {
      alert('Пожалуйста, заполните все обязательные поля и укажите корректный баланс.');
      return;
    }

    const updatedClient = {
      ...client,
      lastName,
      firstName,
      middleName,
      balance,
    };

    onEditClient(client, updatedClient);
  };

  handleCancelEdit = () => {
    const { client, onCancelEdit } = this.props;
    onCancelEdit(client.id);
  };

  handleDelete = () => {
    const { client, onDeleteClient } = this.props;
    onDeleteClient(client);
  };

  render() {
    console.log('Рендер Клиента:', this.props.client.id);
    const { client, isEditing, onToggleEdit } = this.props;

    return (
      <div>
        {isEditing ? (
          <div className='row'>
            <input className='inputCol' ref={(input) => (this.lastNameInput = input)} defaultValue={client.lastName} placeholder="Фамилия" />
            <input className='inputCol' ref={(input) => (this.firstNameInput = input)} defaultValue={client.firstName} placeholder="Имя" />
            <input className='inputCol' ref={(input) => (this.middleNameInput = input)} defaultValue={client.middleName} placeholder="Отчество" />
            <input className='inputCol' ref={(input) => (this.balanceInput = input)} defaultValue={client.balance} placeholder="Баланс" />
            <span className={client.active? 'active' : 'blocked'}>
              {client.active ? 'Активен' : 'Заблокирован'}
            </span>
            <button className='button' onClick={this.handleEdit}>Сохранить</button>
            <button className='button' onClick={this.handleCancelEdit}>Отмена</button>
          </div>
        ) : (
          <div className='row'>
            <span className='col'>
              {client.lastName} 
            </span>
            <span className='col'>
              {client.firstName} 
            </span>
            <span className='col'>
              {client.middleName}
            </span>
            <span className='col'>
              {client.balance}
            </span>
            <span className={client.active? 'active' : 'blocked'}>
              {client.active ? 'Активен' : 'Заблокирован'}
            </span>
            <button className='button' onClick={() => onToggleEdit(client.id)}>Редактировать</button>
            <button className='button' onClick={this.handleDelete}>Удалить</button>
          </div>
        )}
      </div>
    );
  }
}

export default Client;
