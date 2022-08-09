import React from 'react';
import styled from 'styled-components';

function JavaTab({ selectedLanguage, setLanguageToJava }) {
  const color = selectedLanguage === 'java' ? '#fff' : '#db3236';

  return (
    <JavaTabComponent
      background={color}
      onClick={setLanguageToJava}
    >
      Java
    </JavaTabComponent>
  );
}

const JavaTabComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 44px;
  width: 100px;
  background-color: ${(props) => props.background};
  border: 3px solid #db3236;
  border-radius: 5px;
`;

export default JavaTab;
