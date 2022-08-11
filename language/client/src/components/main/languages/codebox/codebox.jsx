import React from 'react';
import styled from 'styled-components';

import ExampleCode from './examplecode';
import TopicSelected from './topicselected';

function getColorFromSelectedLanguage(selectedLanguage) {
  switch (selectedLanguage) {
    case 'javascript':
      return '#f4c20d';
    case 'python':
      return '#3cba54';
    case 'java':
      return '#db3236';
    case 'typescript':
      return '#4885ed';
    case 'go':
      return '#B051CA';
    case 'c++':
      return '#F89E2C';
    default:
      return '#4885ed';
  }
}

function CodeBox({ textContent, language, topic }) {
  const color = getColorFromSelectedLanguage(language);
  return (
    <CodeBoxComponent color={color}>
      <TopicSelected textContent={topic} />
      <ExampleCode topic={topic} selectedLanguage={language} textContent={textContent} />
    </CodeBoxComponent>
  );
}

const CodeBoxComponent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 750px;
  width: 750px;
  background-color: ${(props) => props.color};
`;

export default CodeBox;
