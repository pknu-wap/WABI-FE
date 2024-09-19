import React from 'react';

import * as Styles from './SearchBox.styles';

const SearchBox = () => {
  return (
    <Styles.SearchBoxFrame>
      <Styles.SearchIcon src={'images/Icon/searchIcon.png'} />
      <Styles.InputBox type="input" placeholder={'SEARCH'} />
    </Styles.SearchBoxFrame>
  );
};

export default SearchBox;
