import React from 'react';
import styled from 'styled-components';

function LoginText() {
  return (
    <>
      <LanguageLetter color="#4885ed">L</LanguageLetter>
      <LanguageLetter color="#db3236">o</LanguageLetter>
      <LanguageLetter color="#f4c20d">g</LanguageLetter>
      {' '}
      <LanguageLetter color="#3cba54">I</LanguageLetter>
      <LanguageLetter color="#db3236">n</LanguageLetter>
    </>
  );
}

const LanguageLetter = styled.div`
  color: ${(props) => props.color};
`;

export default LoginText;
