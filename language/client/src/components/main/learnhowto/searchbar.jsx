import React from 'react';
import styled from 'styled-components';

function SearchBar() {
  return (
    <SearchBarComponent type="text" className="search-bar" />
  );
}

const SearchBarComponent = styled.input`
  width: 300px;
  height: 40px;
  font-size: 32px;
`;

export default SearchBar;
