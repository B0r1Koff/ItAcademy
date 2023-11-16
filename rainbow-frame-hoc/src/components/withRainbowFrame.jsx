import React from 'react';

const withRainbowFrame = (colors) => (WrappedComponent) => {
  return class RainbowFrame extends React.Component {
    render() {
      const styleList = colors.map((color) => ({
        border: `2px solid ${color}`,
        padding: '10px',
      }));

      const framedComponent = styleList.reduce((component, style) => {
        return <div style={style}>{component}</div>;
      }, <WrappedComponent {...this.props} />);

      return framedComponent;
    }
  };
};

export default withRainbowFrame;