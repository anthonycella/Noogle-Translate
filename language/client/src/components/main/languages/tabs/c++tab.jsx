import React from 'react';
import styled from 'styled-components';

function CPlusPlusTab({ selectedLanguage, setLanguageToCPlusPlus }) {
  let color;
  let hoverColor;

  if (selectedLanguage === 'c++') {
    color = '#fff';
    hoverColor = '#F89E2C';
  } else {
    color = '#F89E2C';
    hoverColor = '#fff';
  }

  return (
    <CPlusPlusTabComponent
      background={color}
      onClick={setLanguageToCPlusPlus}
      hoverColor={hoverColor}
    >
      C++
    </CPlusPlusTabComponent>
  );
}

const CPlusPlusTabComponent = styled.div`
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
  border: 3px solid #F89E2C;
  border-bottom: 0px;
  border-radius: 5px 5px 0px 0px;
`;

export default CPlusPlusTab;
