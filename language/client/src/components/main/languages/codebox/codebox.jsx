import React from 'react';
import styled from 'styled-components';

import ExampleCode from './examplecode';
import code from './code';

function CodeBox({ textContent, language }) {
  return (
    <CodeBoxComponent>
      <ExampleCode selectedLanguage={language} textContent={textContent} />
    </CodeBoxComponent>
  );
}

const CodeBoxComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 700px;
  width: 750px;
  background-color: #CCC;
`;

export default CodeBox;
