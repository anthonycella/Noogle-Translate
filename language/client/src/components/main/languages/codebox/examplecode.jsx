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

function ExampleCode({ textContent, selectedLanguage }) {
  let color;
  if (textContent === 'Select a language to begin') {
    color = 'white';
  } else {
    color = getColorFromSelectedLanguage(selectedLanguage);
  }
  return (
    <ExampleCodeComponent color={color}>
      {textContent}
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
`;

export default ExampleCode;
