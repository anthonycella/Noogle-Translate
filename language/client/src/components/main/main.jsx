import React, { useState } from 'react';
import styled from 'styled-components';

import Languages from './languages/languages';
import LearnHowTo from './learnhowto/learnhowto';

function Main() {
  const [topic, setTopic] = useState('Say I am Batman');
  // console.log('topic is', topic);

  return (
    <MainComponent>
      <LearnHowTo setTopic={setTopic} />
      <Languages topic={topic} />
    </MainComponent>
  );
}

const MainComponent = styled.div`
  margin-top: 5px;
  height: 1000px;
  width: 750px;
`;

export default Main;
