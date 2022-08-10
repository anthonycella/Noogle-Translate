import React from 'react';
import styled from 'styled-components';

function ContributionButton({ popUpAModal }) {
  return (
    <ContributeComponent onClick={popUpAModal}>
      Write a Contribution
    </ContributeComponent>
  );
}

const ContributeComponent = styled.button`
  font-size: 18px;
  margin: 25px;
`;

export default ContributionButton;
