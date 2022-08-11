import React from 'react';
import styled from 'styled-components';

function SearchBar({ onChange }) {
  return (
    <SearchBarComponent type="text" className="search-bar" onChange={onChange} />
  );
}

const SearchBarComponent = styled.input`
  width: 295px;
  height: 32px;
  font-size: 24px;
  border-radius: 5px;
`;

export default SearchBar;
