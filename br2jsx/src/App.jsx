import React, { Component } from 'react';
import Br2 from './components/Br2';

class App extends Component {
  render() {
    let text="первый<br>второй<br/>третий<br />последний";

    return (
      <div>
        <Br2 text={text} />
      </div>
    );
  }
}

export default App;