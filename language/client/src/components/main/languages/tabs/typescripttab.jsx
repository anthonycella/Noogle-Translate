import React from 'react';
import styled from 'styled-components';

function TypescriptTab({ selectedLanguage, setLanguageToTypescript }) {
  let color;
  let hoverColor;

  if (selectedLanguage === 'typescript') {
    color = '#fff';
    hoverColor = '#4885ed';
  } else {
    color = '#4885ed';
    hoverColor = '#fff';
  }

  return (
    <TypescriptTabComponent
      background={color}
      onClick={setLanguageToTypescript}
      hoverColor={hoverColor}
    >
      Typescript
    </TypescriptTabComponent>
  );
}

const TypescriptTabComponent = styled.div`
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
  border: 3px solid #4885ed;
  border-bottom: 0px;
  border-radius: 5px 5px 0px 0px;
`;

export default TypescriptTab;
