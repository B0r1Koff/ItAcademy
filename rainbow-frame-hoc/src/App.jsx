import React from 'react';
import DoubleButton from './components/DoubleButton';
import withRainbowFrame from './components/withRainbowFrame';

const colors = ['red', 'orange', 'yellow', 'green', '#00BFFF', 'blue', 'purple'];

const FramedDoubleButton = withRainbowFrame(colors)(DoubleButton);

class App extends React.Component {
  render() {
    return (
      <div>
        <DoubleButton caption1="однажды" caption2="пору" cbPressed={(num) => alert(num)}>
          в студёную зимнюю
        </DoubleButton>

        <FramedDoubleButton caption1="я из лесу" caption2="мороз" cbPressed={(num) => alert(num)}>
          вышел, был сильный
        </FramedDoubleButton>
      </div>
    );
  }
}

export default App;
