import React from 'react';

import * as Styles from './SearchBox.styles';

interface SearchBoxProps {
  filterTextChange: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBox = ({filterTextChange}: SearchBoxProps) => {
  const handleSearchTextChange = (
    searchTextChangeEvent: React.ChangeEvent<HTMLInputElement>,
  ) => {
    filterTextChange(searchTextChangeEvent.target.value);
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
