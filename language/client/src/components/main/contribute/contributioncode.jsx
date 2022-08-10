import React from 'react';
import styled from 'styled-components';

function ContributionCode({ setContributionCode }) {
  return (
    <OverallContainer>
      Input Contribution:
      <ContributionCodeComponent
        onChange={(event) => setContributionCode(event.target.value)}
      />
    </OverallContainer>
  );
}

const OverallContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  padding: 15px;
  border: 1px solid black;
`;

const ContributionCodeComponent = styled.textarea`
  margin-top: 5px;
  height: 1000px;
  width: 635px;
  padding: 15px;
  font-size: 14px;
`;

export default ContributionCode;
