import React from 'react';
import styled from 'styled-components';

function Contribute() {
  return (
    <ContributeComponent>
      Write a Contribution
    </ContributeComponent>
  );
}

const ContributeComponent = styled.button`
  font-size: 18px;
  margin: 25px;
`;

export default Contribute;
