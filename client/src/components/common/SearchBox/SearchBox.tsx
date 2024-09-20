import React from 'react';

import * as Styled from './SearchBox.styles';

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
    <Styled.SearchBoxFrame>
      <Styled.SearchIcon src={'images/Icon/searchIcon.png'} />
      <Styled.InputBox
        type="input"
        placeholder={'SEARCH'}
        onChange={handleSearchTextChange}
      />
    </Styled.SearchBoxFrame>
  );
};

export default SearchBox;
