import React from 'react';
import styled from 'styled-components';

function GoTab({ selectedLanguage, setLanguageToGo }) {
  let color;
  let hoverColor;

  if (selectedLanguage === 'go') {
    color = '#fff';
    hoverColor = '#B051CA';
  } else {
    color = '#B051CA';
    hoverColor = '#fff';
  }

  return (
    <GoTabComponent
      background={color}
      onClick={setLanguageToGo}
      hoverColor={hoverColor}
    >
      Go
    </GoTabComponent>
  );
}

const GoTabComponent = styled.div`
  &:hover {
    cursor: pointer;
    color: ${(props) => props.hoverColor};
    transition: color 0.2s ease-in-out;
  }
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
