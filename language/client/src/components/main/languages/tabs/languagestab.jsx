import React from 'react';
import styled from 'styled-components';

function LanguagesTab() {
  return (
    <LanguagesTabComponent>
      <LanguageLetter color="#4885ed">L</LanguageLetter>
      <LanguageLetter color="#db3236">a</LanguageLetter>
      <LanguageLetter color="#f4c20d">n</LanguageLetter>
      <LanguageLetter color="#4885ed">g</LanguageLetter>
      <LanguageLetter color="#3cba54">u</LanguageLetter>
      <LanguageLetter color="#db3236">a</LanguageLetter>
      <LanguageLetter color="#4885ed">g</LanguageLetter>
      <LanguageLetter color="#db3236">e</LanguageLetter>
      <LanguageLetter color="#f4c20d">s</LanguageLetter>
    </LanguagesTabComponent>
  );
}

const LanguageLetter = styled.div`
  color: ${(props) => props.color};
`;

const LanguagesTabComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 47px;
  width: 100px;
  color: black;
  background-color: #fff;
  border: 3px solid #4885ed;
  border-bottom: 0px;
  border-radius: 5px 5px 0px 0px;
`;

export default LanguagesTab;
