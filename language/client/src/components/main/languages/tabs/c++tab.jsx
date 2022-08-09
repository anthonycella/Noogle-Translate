import React from 'react';
import styled from 'styled-components';

function CPlusPlusTab({ selectedLanguage, setLanguageToCPlusPlus }) {
  const color = selectedLanguage === 'c++' ? '#fff' : '#f4c20d';

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
  height: 44px;
  width: 100px;
  background-color: ${(props) => props.background};
  border: 3px solid #f4c20d;
  border-radius: 5px 5px 0px 0px;
`;

export default CPlusPlusTab;
