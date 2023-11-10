import React, { Component } from 'react';
import "./Br2.css"

class Br2 extends Component {
  render() {
    const { text } = this.props;
    const lines = text.split(/<br\s*\/?>|\r?\n/);

    return (
      <div className='br2'>
        {lines.map((line, index) => [
          line,
          index !== lines.length - 1 ? <br key={`br-${index}`} /> : null
        ])}
      </div>
    );
  }
}

export default Br2;