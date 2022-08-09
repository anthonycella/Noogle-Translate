import React from 'react';
import styled from 'styled-components';

import SelectTopic from './selecttopic';

function LearnHowTo({ setTopic, topics }) {
  return (
    <LearnHowToComponent>
      Learn how to
      &nbsp;
      <SelectTopic setTopic={setTopic} topics={topics} />
      &nbsp;
      in...
    </LearnHowToComponent>
  );
}

const LearnHowToComponent = styled.div`
  text-align: center;
  font-size: 36px;
  margin: 15px;
`;

export default LearnHowTo;
