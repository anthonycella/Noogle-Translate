import React from 'react';
import styled from 'styled-components';

function TopicSelected({ textContent }) {
  return (
    <TopicSelectedComponent>
      Topic Selected:
      &nbsp;
      {textContent}
    </TopicSelectedComponent>
  );
}

const TopicSelectedComponent = styled.span`
  font-size: 14px;
  color: #333;
  margin: 15px;
  margin-left: 35px;
`;

export default TopicSelected;
