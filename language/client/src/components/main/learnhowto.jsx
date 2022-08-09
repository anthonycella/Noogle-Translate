import React from 'react';
import styled from 'styled-components';

function LearnHowTo() {
  return (
    <LearnHowToComponent>
      Learn how to
      &nbsp;

      &nbsp;
      in...
    </LearnHowToComponent>
  );
}

const LearnHowToComponent = styled.div`
  text-align: center;
  font-size: 36px;
  margin: 15px;
  border: 1px solid green;
`;

export default LearnHowTo;
