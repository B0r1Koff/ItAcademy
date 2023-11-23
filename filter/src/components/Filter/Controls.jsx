import React from 'react';

const Controls = ({ filterText, setFilterText, sortAlphabetically, setSortAlphabetically, handleReset }) => {
  return (
    <div className='sort-elements'>
      <input
        className='checkbox-to-sort'
        type="checkbox"
        checked={sortAlphabetically}
        onChange={() => setSortAlphabetically(!sortAlphabetically)}
      />
      <input
        className='input-to-sort'
        type="text"
        placeholder="Поиск..."
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
      <button onClick={handleReset}>Сброс</button>
    </div>
  );
};

export default Controls;
