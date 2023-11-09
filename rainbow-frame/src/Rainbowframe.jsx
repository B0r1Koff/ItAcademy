import React, { Component } from 'react';

class RainbowFrame extends Component {
  render() {
    const { colors, children } = this.props;

    if (colors.length === 0) {
      return <div>{children}</div>;
    }

    const frameStyle = {
      border: `20px solid ${colors[0]}`,
      padding: '10px',
      margin: '10px',
    };

    return (
      <div style={frameStyle}>
        <RainbowFrame colors={colors.slice(1)}>{children}</RainbowFrame>
      </div>
    );
  }
}

export default RainbowFrame;