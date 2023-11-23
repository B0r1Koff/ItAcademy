import React, { useState } from 'react';

const Filter = ({ items }) => {
  const [filterText, setFilterText] = useState('');
  const [sortAlphabetically, setSortAlphabetically] = useState(false);

  const handleFilterTextChange = (e) => {
    setFilterText(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortAlphabetically(e.target.checked);
  };

  const handleReset = () => {
    setFilterText('');
    setSortAlphabetically(false);
  };

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
          onChange={handleSortChange}
        />
        <input
          className='input-to-sort'
          type="text"
          placeholder="Поиск..."
          value={filterText}
          onChange={handleFilterTextChange}
        />
        <button onClick={handleReset}>Сброс</button>
      </div>
      <ul className='items-list'>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Filter;
