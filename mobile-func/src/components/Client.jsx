import React, { useRef, useEffect } from 'react';
import EventEmitter from './EventEmitter';
import './Client.css';

const Client = ({ client, isEditing, onToggleEdit }) => {
  useEffect(() => {
    console.log(`Клиент ${client.id} рендерится.`);
  }, [client.id]);
  
  const lastNameInput = useRef(null);
  const firstNameInput = useRef(null);
  const middleNameInput = useRef(null);
  const balanceInput = useRef(null);

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

    EventEmitter.emit('editClient', client, updatedClient);
  };

  const handleCancelEdit = () => {
    EventEmitter.emit('cancelEdit', client.id);
  };

  const handleDelete = () => {
    EventEmitter.emit('deleteClient', client);
  };

  return (
    <div>
      {isEditing ? (
        <div className='row'>
          <input className='inputCol' ref={lastNameInput} defaultValue={client.lastName} placeholder="Фамилия" />
          <input className='inputCol' ref={firstNameInput} defaultValue={client.firstName} placeholder="Имя" />
          <input className='inputCol' ref={middleNameInput} defaultValue={client.middleName} placeholder="Отчество" />
          <input className='inputCol' ref={balanceInput} defaultValue={client.balance} placeholder="Баланс" />
          <span className={client.active ? 'active' : 'blocked'}>
            {client.active ? 'Активен' : 'Заблокирован'}
          </span>
          <button className='button' onClick={handleEdit}>Сохранить</button>
          <button className='button' onClick={handleCancelEdit}>Отмена</button>
        </div>
      ) : (
        <div className='row'>
          <span className='col'>{client.lastName}</span>
          <span className='col'>{client.firstName}</span>
          <span className='col'>{client.middleName}</span>
          <span className='col'>{client.balance}</span>
          <span className={client.active ? 'active' : 'blocked'}>
            {client.active ? 'Активен' : 'Заблокирован'}
          </span>
          <button className='button' onClick={() => onToggleEdit(client.id)}>Редактировать</button>
          <button className='button' onClick={handleDelete}>Удалить</button>
        </div>
      )}
    </div>
  );
};

export default Client;
