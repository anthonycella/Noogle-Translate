import React, { useState } from 'react';
import styled from 'styled-components';

import SearchBar from './searchbar';
import MagnifyingGlass from './magnifyingglass';

function getSearchResults(searchEntry, trie) {
  const results = trie.startsWith(searchEntry);
  console.log(results);
}

function Search({ trie }) {
  const [searchEntry, setSearchEntry] = useState('');

  getSearchResults(searchEntry, trie);
  return (
    <SearchBar onChange={(event) => setSearchEntry(event.target.value)} />
  );
  // return (
  //   <>
  //     <SearchBar onChange={(event) => setSearchEntry(event.target.value)} />
  //     &nbsp;
  //     <MagnifyingGlass onClick={() => submitSearchEntry(searchEntry, setSearchEntry)} />
  //   </>
  // );
}

export default Search;
