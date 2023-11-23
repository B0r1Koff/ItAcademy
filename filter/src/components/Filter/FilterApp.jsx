import React, { useState } from 'react';
import Controls from './Controls';
import ItemList from './ItemList';

const FilterApp = ({ items }) => {
  const [filterText, setFilterText] = useState('');
  const [sortAlphabetically, setSortAlphabetically] = useState(false);

  const handleReset = () => {
    setFilterText('');
    setSortAlphabetically(false);
  };

  return (
    <div>
      <Controls
        filterText={filterText}
        setFilterText={setFilterText}
        sortAlphabetically={sortAlphabetically}
        setSortAlphabetically={setSortAlphabetically}
        handleReset={handleReset}
      />
      <ItemList items={items} filterText={filterText} sortAlphabetically={sortAlphabetically} />
    </div>
  );
};

export default FilterApp;
