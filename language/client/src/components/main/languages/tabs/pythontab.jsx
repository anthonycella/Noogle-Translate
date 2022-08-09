import React from 'react';
import styled from 'styled-components';

function PythonTab({ selectedLanguage, setLanguageToPython }) {
  const color = selectedLanguage === 'python' ? '#fff' : '#3cba54';

  return (
    <PythonTabComponent
      background={color}
      onClick={setLanguageToPython}
    >
      Python
    </PythonTabComponent>
  );
}

const PythonTabComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 44px;
  width: 100px;
  background-color: ${(props) => props.background};
  border: 3px solid #3cba54;
  border-radius: 5px;
`;

export default PythonTab;
