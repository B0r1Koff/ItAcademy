import React, { useRef, useEffect } from 'react';
import './Client.css';
import { useAppContext } from './AppContext';

const Client = ({ client, isEditing }) => {
  const lastNameInput = useRef(null);
  const firstNameInput = useRef(null);
  const middleNameInput = useRef(null);
  const balanceInput = useRef(null);

  const { eventEmitter, editingClientId, setFilter } = useAppContext();

  useEffect(() => {
    const handleSave = (oldClient, updatedClient) => {
      setFilter('all'); // Reset filter when a change is made
    };

    const handleCancel = () => {
      // No additional logic needed
    };

    const handleDelete = () => {
      setFilter('all'); // Reset filter when a client is deleted
    };

    eventEmitter.on('editClient', handleSave);
    eventEmitter.on('toggleEdit', handleCancel);
    eventEmitter.on('deleteClient', handleDelete);

    return () => {
      eventEmitter.off('editClient', handleSave);
      eventEmitter.off('toggleEdit', handleCancel);
      eventEmitter.off('deleteClient', handleDelete);
    };
  }, [eventEmitter, setFilter]);

  const handleEdit = () => {
    const lastName = lastNameInput.current.value.trim();
    const firstName = firstNameInput.current.value.trim();
    const middleName = middleNameInput.current.value.trim();
    const balance = parseFloat(balanceInput.current.value);

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

    eventEmitter.emit('editClient', client, updatedClient);
  };

  const handleCancelEdit = () => {
    eventEmitter.emit('toggleEdit', client.id);
  };

  const handleDelete = () => {
    eventEmitter.emit('deleteClient', client);
  };

  return (
    <div>
      {isEditing ? (
        <div className='row'>
          <input className='inputCol' ref={lastNameInput} defaultValue={client.lastName} placeholder="Фамилия" />
          <input className='inputCol' ref={firstNameInput} defaultValue={client.firstName} placeholder="Имя" />
          <input className='inputCol' ref={middleNameInput} defaultValue={client.middleName} placeholder="Отчество" />
          <input className='inputCol' ref={balanceInput} defaultValue={client.balance} placeholder="Баланс" />
          <span className={client.active? 'active' : 'blocked'}>
            {client.active ? 'Активен' : 'Заблокирован'}
          </span>
          <button className='button' onClick={handleEdit}>Сохранить</button>
          <button className='button' onClick={handleCancelEdit}>Отмена</button>
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
          <button className='button' onClick={() => eventEmitter.emit('toggleEdit', client.id)}>Редактировать</button>
          <button className='button' onClick={handleDelete}>Удалить</button>
        </div>
      )}
    </div>
  );
};

export default Client;
