import React from 'react';
import styled from 'styled-components';

function getColorFromSelectedLanguage(selectedLanguage) {
  switch (selectedLanguage) {
    case 'python':
      return '#3cba54';
    case 'java':
      return '#db3236';
    case 'typescript':
      return '#4885ed';
    default:
      return 'white';
  }
}

function ExampleCode({ textContent, selectedLanguage }) {
  const color = getColorFromSelectedLanguage(selectedLanguage);
  return (
    <ExampleCodeComponent color={color}>
      {textContent}
    </ExampleCodeComponent>
  );
}

const ExampleCodeComponent = styled.div`
  whiteSpace: nowrap;
  min-height: 600px;
  width: 650px;
  padding: 25px;
  color: ${(props) => props.color};
  font-size: 18px;
  background-color: #333;
`;

export default ExampleCode;
