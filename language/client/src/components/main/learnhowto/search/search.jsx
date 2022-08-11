import React, { useState } from 'react';
import styled from 'styled-components';

import SearchBar from './searchbar';
import SearchResults from './searchresults';

function getSearchResults(searchEntry, trie) {
  const results = trie.startsWith(searchEntry);
  return results;
}

function Search({ trie, setTopic, topics }) {
  const [searchEntry, setSearchEntry] = useState('');

  const results = searchEntry === '' ? [] : getSearchResults(searchEntry, trie);

  return (
    <SearchComponent>
      <SearchBar onChange={(event) => setSearchEntry(event.target.value)} />
      <SearchResults results={results} setTopic={setTopic} />
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
