import React from 'react';
import styled from 'styled-components';

import ExampleCode from './examplecode';
import TopicSelected from './topicselected';

function CodeBox({ textContent, language, topic }) {
  return (
    <CodeBoxComponent>
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
  background-color: #CCC;
`;

export default CodeBox;
