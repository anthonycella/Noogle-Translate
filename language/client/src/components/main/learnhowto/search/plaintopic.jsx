import React from 'react';
import styled from 'styled-components';

import Blinker from '../blinker';

function PlainTopic({ topic, onClick }) {
  return (
    <OverallComponent onClick={onClick} className="search-bar">
      <PlainTopicComponent className="search-bar">
        {topic}
        <Blinker className="search-bar" />
      </PlainTopicComponent>
      <BarComponent className="search-bar" />
    </OverallComponent>
  );
}

const PlainTopicComponent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 300px;
  white-space: pre;
  margin-top: 2px;
  height: 36px;
  font-size: 34px;
`;

const OverallComponent = styled.div`
  &:hover {
    cursor: pointer;
  }
  display: flex;
  flex-direction: column;
`;

const BarComponent = styled.div`
  height: 3px;
  width: 300px;
  background-color: black;
`;

export default PlainTopic;
