import React from 'react';
import styled from 'styled-components';

function ContributionTopic({ setContributionTopic }) {
  return (
    <OverallContainer>
      Select Topic:
      <ContributionTopicComponent
        type="text"
        onChange={(event) => setContributionTopic(event.target.value)}
      />
    </OverallContainer>
  );
}

const OverallContainer = styled.span`
  font-size: 18px;
  padding: 15px;
  border: 1px solid black;
`;

const ContributionTopicComponent = styled.input`
  font-size: 18px;
  margin: 15px;
`;

export default ContributionTopic;
