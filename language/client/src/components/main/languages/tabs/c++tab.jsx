import React from 'react';
import styled from 'styled-components';

function CPlusPlusTab({ selectedLanguage, setLanguageToCPlusPlus }) {
  const color = selectedLanguage === 'c++' ? '#fff' : '#F89E2C';

  return (
    <CPlusPlusTabComponent
      background={color}
      onClick={setLanguageToCPlusPlus}
    >
      C++
    </CPlusPlusTabComponent>
  );
}

const CPlusPlusTabComponent = styled.div`
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
