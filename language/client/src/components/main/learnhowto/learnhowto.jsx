import React from 'react';
import styled from 'styled-components';

import SelectTopic from './selecttopic';

function LearnHowTo() {
  return (
    <LearnHowToComponent>
      Learn how to
      &nbsp;
      <SelectTopic />
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
