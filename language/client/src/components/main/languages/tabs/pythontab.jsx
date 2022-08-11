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
  height: 47px;
  width: 100px;
  background-color: ${(props) => props.background};
  border: 3px solid #3cba54;
  border-bottom: 0px;
  border-radius: 5px 5px 0px 0px;
`;

export default PythonTab;
