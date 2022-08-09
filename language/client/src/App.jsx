import React from 'react';
import styled from 'styled-components';

import Title from './components/title/title';
import Main from './components/main/main';

function App() {
  return (
    <AppComponent className="App">
      <Title />
      <Main />
    </AppComponent>
  );
}

const AppComponent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export default App;
