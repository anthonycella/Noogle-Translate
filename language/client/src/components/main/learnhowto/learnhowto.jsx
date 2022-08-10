import React from 'react';
import styled from 'styled-components';

import SelectTopic from './selecttopic';
import AutoTypeIntro from './autotypeintro';

function LearnHowTo({
  setTopic, topics, topic,
}) {
  if (topic === 'Select a topic to begin') {
    return (
      <LearnHowToComponent>
        Learn how to
        &nbsp;
        <AutoTypeIntro setTopic={setTopic} topics={topics} />
        &nbsp;
        in...
      </LearnHowToComponent>
    );
  }
  return (
    <LearnHowToComponent>
      Learn how to
      &nbsp;
      <SelectTopic setTopic={setTopic} topics={topics} selectedTopic={topic} />
      &nbsp;
      in...
    </LearnHowToComponent>
  );
}

const LearnHowToComponent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  font-size: 36px;
  margin: 15px;
`;

export default LearnHowTo;
