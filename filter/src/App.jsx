import { Component } from 'react';
import './App.css';
import FilterApp from './components/Filter/FilterApp'

const items = [
  'california',
  'everything',
  'aboveboard',
  'washington',
  'basketball',
  'weathering',
  'characters',
  'literature',
  'contraband',
  'appreciate',
];

const App = () => {

  return (
    <div className='App'>
      <FilterApp items={items} />
    </div>
  );
};

export default App;