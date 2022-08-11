import React from 'react';
import styled from 'styled-components';

function JavascriptTab({ selectedLanguage, setLanguageToJavascript }) {
  let color;
  let hoverColor;

  if (selectedLanguage === 'javascript') {
    color = '#fff';
    hoverColor = '#f4c20d';
  } else {
    color = '#f4c20d';
    hoverColor = '#fff';
  }

  return (
    <JavascriptTabComponent
      background={color}
      onClick={setLanguageToJavascript}
      hoverColor={hoverColor}
    >
      Javascript
    </JavascriptTabComponent>
  );
}

const JavascriptTabComponent = styled.div`
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
  border: 3px solid #f4c20d;
  border-bottom: 0px;
  border-radius: 5px 5px 0px 0px;
`;

export default JavascriptTab;
