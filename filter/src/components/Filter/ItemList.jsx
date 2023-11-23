import React from 'react';

const ItemList = ({ items, filterText, sortAlphabetically }) => {
  let filteredItems = items.filter((item) =>
    item.toLowerCase().includes(filterText.toLowerCase())
  );

  if (sortAlphabetically) {
    filteredItems = filteredItems.sort();
  }

  return (
    <ul className='items-list'>
      {filteredItems.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default ItemList;
