import React from 'react';
import styled from 'styled-components';

import ExampleCode from './examplecode';
import code from './code';

function CodeBox({ selectedLanguage, topic }) {
  const textContent = selectedLanguage === '' ? 'Select a language to begin' : code[topic][selectedLanguage] || '';
  // console.log('text content is', textContent);
  return (
    <CodeBoxComponent>
      <ExampleCode selectedLanguage={selectedLanguage} textContent={textContent} />
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
