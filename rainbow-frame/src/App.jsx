import { Component } from 'react';
import './App.css';
import RainbowFrame from './Rainbowframe'

export default class App extends Component {

  render() {
    const colors = ['red','orange', 'yellow','green', '#00BFFF', 'blue', 'purple'];

    return (
      <div className="App">
        <RainbowFrame colors={colors}>
          <h1>Hello!</h1>
        </RainbowFrame>
      </div>
    );
  }
  
}