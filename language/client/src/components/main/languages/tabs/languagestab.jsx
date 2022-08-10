import React from 'react';
import styled from 'styled-components';

function LanguagesTab() {
  return (
    <LanguagesTabComponent>
      Languages
    </LanguagesTabComponent>
  );
}

const LanguagesTabComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 44px;
  width: 100px;
  color: black;
  background-color: #fff;
  border: 3px solid #333;
  border-radius: 5px 5px 0px 0px;
`;

export default LanguagesTab;
