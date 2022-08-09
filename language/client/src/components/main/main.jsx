import React from 'react';
import styled from 'styled-components';

import Languages from './languages';
import LearnHowTo from './learnhowto';

function Main() {
  return (
    <MainComponent>
      <LearnHowTo />
      <Languages />
    </MainComponent>
  );
}

const MainComponent = styled.div`
  margin-top: 5px;
  height: 1000px;
  width: 750px;
  border: 1px solid blue;
`;

export default Main;
