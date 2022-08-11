import React from 'react';
import styled from 'styled-components';

function JavaTab({ selectedLanguage, setLanguageToJava }) {
  let color;
  let hoverColor;

  if (selectedLanguage === 'java') {
    color = '#fff';
    hoverColor = '#db3236';
  } else {
    color = '#db3236';
    hoverColor = '#fff';
  }

  return (
    <JavaTabComponent
      background={color}
      onClick={setLanguageToJava}
      hoverColor={hoverColor}
    >
      Java
    </JavaTabComponent>
  );
}

const JavaTabComponent = styled.div`
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
  border: 3px solid #db3236;
  border-bottom: 0px;
  border-radius: 5px 5px 0px 0px;
`;

export default JavaTab;
