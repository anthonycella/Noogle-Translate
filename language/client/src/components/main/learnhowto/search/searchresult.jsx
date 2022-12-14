import React from 'react';
import styled from 'styled-components';

function SearchResult({ result, hoverColor, setTopic }) {
  return (
    <SearchResultComponent className="search-bar" hoverColor={hoverColor} onClick={() => setTopic([result, true])}>
      {result}
    </SearchResultComponent>
  );
}

const SearchResultComponent = styled.div`
  &:hover {
    background-color: ${(props) => props.hoverColor};
    cursor: pointer;
  }
  background-color: #fff;
  height: 24px;
  padding: 10px;
  max-width: 293px;
  font-size: 16px;
`;

export default SearchResult;
