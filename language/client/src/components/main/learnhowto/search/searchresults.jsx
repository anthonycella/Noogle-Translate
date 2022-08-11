import React from 'react';
import styled from 'styled-components';

import SearchResult from './searchresult';

function getColor(index) {
  const colors = ['#4885ed', '#db3236', '#f4c20d', '#4885ed', '#3cba54', '#db3236'];
  return colors[index % colors.length];
}

function SearchResults({ results, setTopic }) {
  let index = -1;

  if (results.length === 0) {
    return null;
  }

  const searchResults = results.map((result) => {
    index += 1;
    const hoverColor = getColor(index);

    return <SearchResult key={index} result={result} hoverColor={hoverColor} setTopic={setTopic} />;
  });
  return (
    <SearchResultsComponent className="search-bar">
      {searchResults}
    </SearchResultsComponent>
  );
}

const SearchResultsComponent = styled.div`
  position: absolute;
  top: 36px;
  z-index: 3;
  background-color: #fff;
  border: 1px solid #333;
  width: 293px;
  font-size: 16px;
`;

export default SearchResults;
