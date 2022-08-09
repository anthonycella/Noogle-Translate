import React from 'react';
import styled from 'styled-components';

import SelectTopic from './selecttopic';

function LearnHowTo({ setTopic }) {
  return (
    <LearnHowToComponent>
      Learn how to
      &nbsp;
      <SelectTopic setTopic={setTopic} />
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
