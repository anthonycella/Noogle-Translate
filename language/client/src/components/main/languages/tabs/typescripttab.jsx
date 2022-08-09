import React from 'react';
import styled from 'styled-components';

function TypescriptTab({ selectedLanguage, setLanguageToTypescript }) {
  const color = selectedLanguage === 'typescript' ? '#fff' : '#4885ed';

  return (
    <TypescriptTabComponent
      background={color}
      onClick={setLanguageToTypescript}
    >
      Typescript
    </TypescriptTabComponent>
  );
}

const TypescriptTabComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 44px;
  width: 100px;
  background-color: ${(props) => props.background};
  border: 3px solid #4885ed;
  border-radius: 5px;
`;

export default TypescriptTab;
