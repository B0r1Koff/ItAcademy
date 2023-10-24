import { Component } from 'react';
import './App.css';
import Filter from './components/Filter/Filter'

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

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <Filter items={items} />
      </div>
    );
  }
  
}