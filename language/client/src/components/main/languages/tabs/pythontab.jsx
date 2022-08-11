import React from 'react';
import styled from 'styled-components';

function PythonTab({ selectedLanguage, setLanguageToPython }) {
  let color;
  let hoverColor;

  if (selectedLanguage === 'python') {
    color = '#fff';
    hoverColor = '#3cba54';
  } else {
    color = '#3cba54';
    hoverColor = '#fff';
  }

  return (
    <PythonTabComponent
      background={color}
      hoverColor={hoverColor}
      onClick={setLanguageToPython}
    >
      Python
    </PythonTabComponent>
  );
}

const PythonTabComponent = styled.div`
  &:hover {
    cursor: pointer;
    color: ${(props) => props.hoverColor};
  }
  display: flex;
  justify-content: center;
  align-items: center;
  height: 47px;
  width: 100px;
  background-color: ${(props) => props.background};
  border: 3px solid #3cba54;
  border-bottom: 0px;
  border-radius: 5px 5px 0px 0px;
`;

export default PythonTab;
