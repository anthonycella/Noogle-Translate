import React from 'react';
import styled from 'styled-components';

function LanguagesTab() {
  return (
    <LanguagesTabComponent>
      <LanguageRow>
        <LanguageLetter color="#4885ed">L</LanguageLetter>
        <LanguageLetter color="#db3236">a</LanguageLetter>
        <LanguageLetter color="#f4c20d">n</LanguageLetter>
        <LanguageLetter color="#4885ed">g</LanguageLetter>
        <LanguageLetter color="#3cba54">u</LanguageLetter>
        <LanguageLetter color="#db3236">a</LanguageLetter>
        <LanguageLetter color="#4885ed">g</LanguageLetter>
        <LanguageLetter color="#db3236">e</LanguageLetter>
        <LanguageLetter color="#f4c20d">s</LanguageLetter>
      </LanguageRow>
      <LanguageRow>
        <LanguageLetter color="#4885ed">A</LanguageLetter>
        <LanguageLetter color="#3cba54">v</LanguageLetter>
        <LanguageLetter color="#db3236">a</LanguageLetter>
        <LanguageLetter color="#4885ed">i</LanguageLetter>
        <LanguageLetter color="#db3236">l</LanguageLetter>
        <LanguageLetter color="#f4c20d">a</LanguageLetter>
        <LanguageLetter color="#4885ed">b</LanguageLetter>
        <LanguageLetter color="#db3236">l</LanguageLetter>
        <LanguageLetter color="#f4c20d">e</LanguageLetter>
      </LanguageRow>
    </LanguagesTabComponent>
  );
}

const LanguageLetter = styled.div`
  color: ${(props) => props.color};
`;

const LanguageRow = styled.div`
  margin: 2px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const LanguagesTabComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 47px;
  width: 100px;
  color: black;
  background-color: #fff;
  border: 3px solid #4885ed;
  border-bottom: 0px;
  border-radius: 5px 5px 0px 0px;
`;

export default LanguagesTab;
