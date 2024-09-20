import React from 'react';

import * as Styles from './SearchBox.styles';

const SearchBox = () => {
  const handleSearchTextChange = (
    searchTextChangeEvent: React.ChangeEvent<HTMLInputElement>,
  ) => {
    console.log(searchTextChangeEvent.target.value);
  };

  return (
    <Styles.SearchBoxFrame>
      <Styles.SearchIcon src={'images/Icon/searchIcon.png'} />
      <Styles.InputBox
        type="input"
        placeholder={'SEARCH'}
        onChange={handleSearchTextChange}
      />
    </Styles.SearchBoxFrame>
  );
};

export default SearchBox;
