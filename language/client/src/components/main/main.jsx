import React, { useState } from 'react';
import styled from 'styled-components';

import Languages from './languages/languages';
import LearnHowTo from './learnhowto/learnhowto';
import Contribute from './contribute/contribute';
import ContributionButton from './contribute/contributionbutton';

function Main({ data }) {
  const topics = Object.keys(data) || ['Say I am Batman'];

  const [topic, setTopic] = useState('Select a topic to begin');

  const [modalVisibility, setModalVisibility] = useState('hidden');
  const [searchVisibility, setSearchVisibility] = useState('hidden');

  const languageData = data[topic] || {};

  return (
    <MainComponent>
      <LearnHowTo
        setTopic={setTopic}
        topics={topics}
        topic={topic}
        searchVisibility={searchVisibility}
        setSearchVisibility={setSearchVisibility}
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
