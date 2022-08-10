import React from 'react';
import styled from 'styled-components';

import SelectTopic from './selecttopic';
import AutoTypeIntro from './autotypeintro';

function LearnHowTo({
  setTopic, topics, searchVisibility, setSearchVisibility,
}) {
  if (searchVisibility === 'hidden') {
    return (
      <LearnHowToComponent>
        Learn how to
        &nbsp;
        <AutoTypeIntro topics={topics} startSearch={() => setSearchVisibility('visible')} />
        &nbsp;
        in...
      </LearnHowToComponent>
    );
  }
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
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  font-size: 36px;
  margin: 15px;
`;

export default LearnHowTo;
