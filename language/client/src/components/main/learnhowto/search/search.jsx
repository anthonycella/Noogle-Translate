import React, { useState } from 'react';
import styled from 'styled-components';

import SearchBar from './searchbar';
import SearchResults from './searchresults';

function getSearchResults(searchEntry, trie) {
  const results = trie.startsWith(searchEntry);
  return results;
}

function Search({ trie }) {
  const [searchEntry, setSearchEntry] = useState('');

  const results = getSearchResults(searchEntry, trie);
  const resultsComponent = searchEntry === '' ? <div /> : <SearchResults results={results} />;

  return (
    <SearchComponent>
      <SearchBar onChange={(event) => setSearchEntry(event.target.value)} />
      {resultsComponent}
    </SearchComponent>
  );
}

const SearchComponent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 0px 0px 5px 5px;
`;

export default Search;
