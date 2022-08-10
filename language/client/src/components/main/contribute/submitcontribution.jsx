import React from 'react';
import styled from 'styled-components';

function SubmitContribution({ submitAllFields }) {
  return (
    <ContributeComponent onClick={submitAllFields}>
      Submit
    </ContributeComponent>
  );
}

const ContributeComponent = styled.button`
  font-size: 18px;
  margin: 25px;
`;

export default SubmitContribution;
