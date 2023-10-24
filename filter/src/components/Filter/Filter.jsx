import React, { Component } from 'react';
import './Filter.css'

export default class Filter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filterText: '',
      sortAlphabetically: false,
    };
  }

  handleFilterTextChange = (e) => {
    this.setState({ filterText: e.target.value });
  };

  handleSortChange = (e) => {
    this.setState({ sortAlphabetically: e.target.checked });
  };

  handleReset = () => {
    this.setState({
      filterText: '',
      sortAlphabetically: false,
    });
  };

  render() {
    const { items } = this.props;
    const { filterText, sortAlphabetically } = this.state;

    let filteredItems = items.filter((item) =>
      item.toLowerCase().includes(filterText.toLowerCase())
    );

    if (sortAlphabetically) {
      filteredItems = filteredItems.sort();
    }

    return (
      <div>
        <div className='sort-elements'>

          <input
            className='checkbox-to-sort'
            type="checkbox"
            checked={sortAlphabetically}
            onChange={this.handleSortChange}
          />

          <input
            className='input-to-sort'
            type="text"
            placeholder="Поиск..."
            value={filterText}
            onChange={(e) => {
              this.handleFilterTextChange(e);
            }}
          />

          <button onClick={this.handleReset}>Сброс</button>

        </div>

        <ul className='items-list'>
          {filteredItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

      </div>
    );
  }
}