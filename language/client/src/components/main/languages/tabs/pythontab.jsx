import React from 'react';
import styled from 'styled-components';

function PythonTab() {
  return (
    <PythonTabComponent>Python</PythonTabComponent>
  );
}

const PythonTabComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 100px;
  background-color: #3cba54;
  border-radius: 5px;
`;

export default PythonTab;
