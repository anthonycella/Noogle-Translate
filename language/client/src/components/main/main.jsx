import React, { useState } from 'react';
import styled from 'styled-components';

import Languages from './languages/languages';
import LearnHowTo from './learnhowto/learnhowto';
import Contribute from './contribute/contribute';
import ContributionButton from './contribute/contributionbutton';

function Main({ data }) {
  const topics = Object.keys(data) || ['Say I am Batman'];

  const [topic, setTopic] = useState('Say I am Batman');

  const [modalVisibility, setModalVisibility] = useState('hidden');

  return (
    <MainComponent>
      <LearnHowTo setTopic={setTopic} topics={topics} />
      <Languages languageData={data[topic]} />
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
