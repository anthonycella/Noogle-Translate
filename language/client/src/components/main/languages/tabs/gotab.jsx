import React from 'react';
import styled from 'styled-components';

function GoTab({ selectedLanguage, setLanguageToGo }) {
  const color = selectedLanguage === 'go' ? '#fff' : '#B051CA';

  return (
    <GoTabComponent
      background={color}
      onClick={setLanguageToGo}
    >
      Go
    </GoTabComponent>
  );
}

const GoTabComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 47px;
  width: 100px;
  background-color: ${(props) => props.background};
  border: 3px solid #B051CA;
  border-bottom: 0px;
  border-radius: 5px 5px 0px 0px;
`;

export default GoTab;
