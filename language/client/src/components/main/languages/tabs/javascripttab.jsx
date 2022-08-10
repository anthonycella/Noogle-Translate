import React from 'react';
import styled from 'styled-components';

function JavascriptTab({ selectedLanguage, setLanguageToJavascript }) {
  const color = selectedLanguage === 'javascript' ? '#fff' : '#f4c20d';

  return (
    <JavascriptTabComponent
      background={color}
      onClick={setLanguageToJavascript}
    >
      Javascript
    </JavascriptTabComponent>
  );
}

const JavascriptTabComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 44px;
  width: 100px;
  background-color: ${(props) => props.background};
  border: 3px solid #f4c20d;
  border-radius: 5px 5px 0px 0px;
`;

export default JavascriptTab;
