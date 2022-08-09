import React from 'react';
import styled from 'styled-components';

import Languages from './languages/languages';
import LearnHowTo from './learnhowto/learnhowto';

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
git `;

export default Main;
