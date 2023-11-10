import React, { Component } from 'react';

class RainbowFrame extends Component {
  createRainbow = (colors, children) => {
    if (colors.length === 0) {
      return children;
    }

    const frameColor = colors[0];
    const remainingColors = colors.slice(1);

    return (
      <div style={{ border: `10px solid ${frameColor}`, padding: '10px' }}>
        {this.createRainbow(remainingColors, children)}
      </div>
    );
  };

  render() {
    const { colors, children } = this.props;

    return this.createRainbow(colors, children);
  }
}

export default RainbowFrame;