import React from 'react';
import styled from 'styled-components';

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
      return 'white';
  }
}

function ExampleCode({ textContent, selectedLanguage, topic }) {
  let color;
  let displayedText = textContent;

  if (displayedText === 'Select a language to begin') {
    color = 'white';
  } else {
    color = getColorFromSelectedLanguage(selectedLanguage);
  }

  if (topic === 'Select a topic to begin') {
    displayedText = 'Select a topic by clicking on the autotying text';
  }

  return (
    <ExampleCodeComponent color={color}>
      {displayedText}
    </ExampleCodeComponent>
  );
}

const ExampleCodeComponent = styled.div`
  white-space: pre;
  min-height: 600px;
  width: 650px;
  padding: 25px;
  color: ${(props) => props.color};
  font-size: 18px;
  background-color: #333;
  margin-left: 25px;
  margin-right: 25px;
`;

export default ExampleCode;
