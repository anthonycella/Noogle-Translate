import React, { useState } from 'react';
import styled from 'styled-components';

import SearchBar from './searchbar';
import MagnifyingGlass from './magnifyingglass';

function submitSearchEntry(searchEntry, setSearchEntry) {
  console.log(searchEntry);
  setSearchEntry('');
}

function Search() {
  const [searchEntry, setSearchEntry] = useState('');

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
