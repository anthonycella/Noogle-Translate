import React, { useState } from 'react';
import styled from 'styled-components';

import Languages from './languages/languages';
import LearnHowTo from './learnhowto/learnhowto';
import Contribute from './contribute/contribute';
import ContributionButton from './contribute/contributionbutton';

function Main({ data, searchBarVisibility, setSearchBarVisibility, trie }) {
  const topics = Object.keys(data) || ['Say I am Batman'];

  const [[topic, wasSetFromSearch], setTopic] = useState(['Select a topic to begin', false]);

  const [modalVisibility, setModalVisibility] = useState('hidden');
  // const [dropdownVisibility, setDropdownVisibility] = useState('hidden');

  const languageData = data[topic] || {};

  return (
    <MainComponent>
      <LearnHowTo
        setTopic={setTopic}
        topics={topics}
        topic={topic}
        searchBarVisibility={searchBarVisibility}
        setSearchBarVisibility={setSearchBarVisibility}
        trie={trie}
      />
      <Languages
        languageData={languageData}
        topic={topic}
      />
      <Contribute visibility={modalVisibility} setVisibility={setModalVisibility} />
      <ContributionButton popUpAModal={() => {
        window.scrollTo(0, 0);
        setModalVisibility('visible');
      }}
      />
    </MainComponent>
  );
}

const MainComponent = styled.div`
  margin-top: 5px;
  height: 1500px;
  width: 750px;
`;

export default Main;
