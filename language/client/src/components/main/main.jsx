import React, { useState } from 'react';
import styled from 'styled-components';

import Languages from './languages/languages';
import LearnHowTo from './learnhowto/learnhowto';
import Contribute from './contribute/contribute';
import ContributionButton from './contribute/contributionbutton';

import Code from './languages/codebox/code';

function Main() {
  const [topic, setTopic] = useState('Say I am Batman');
  // console.log('topic is', topic);
  const topics = ['Say I am Batman', 'Write an if statement', 'Create a for loop', 'Write a function'];
  const languages = Object.keys(Code[topic]);
  // console.log("🚀 ~ file: Main.jsx ~ line 13 ~ Main ~ languages", languages);

  return (
    <MainComponent>
      <LearnHowTo setTopic={setTopic} topics={topics} />
      <Languages topic={topic} languages={languages} />
      <Contribute />
      <ContributionButton popUpAModal={() => console.log('I want to pop tart a modal!')} />
    </MainComponent>
  );
}

const MainComponent = styled.div`
  margin-top: 5px;
  height: 1500px;
  width: 750px;
`;

export default Main;
