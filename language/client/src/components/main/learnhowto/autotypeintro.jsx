/* eslint-disable no-param-reassign */
import React, { useState } from 'react';
import styled from 'styled-components';

import Blinker from './blinker';

function getBlankText() {
  let blankText = '';

  for (let i = 0; i < 25; i += 1) {
    blankText += ' ';
  }

  return blankText;
}

function flipBlinker(blinker) {
  if (blinker === '|') {
    return '';
  }

  return '|';
}

function getNewSettings(text, index, topic, topics, direction) {
  const newText = text.split('');
  let newInterval = 75;

  if (direction === 'forward') {
    newText[index] = topic[index];
    index += 1;

    if (index === topic.length) {
      newInterval = 1500;
      index = topic.length - 1;
      direction = 'backward';
    }
  } else {
    newText[index] = '';
    newText[index + 1] = '';
    index -= 1;

    if (index === -1) {
      newInterval = 1500;
      index = 0;
      const currentTopicIndex = topics.indexOf(topic);
      const nextTopicIndex = (currentTopicIndex + 1) % topics.length;
      topic = topics[nextTopicIndex];

      direction = 'forward';
    }
  }
  const newSetText = newText.join('');

  return [newSetText, index, topic, direction, newInterval];
}

function autoType(text, index, topic, topics, direction, setText, interval) {
  setTimeout(() => {
    const newSettings = getNewSettings(text, index, topic, topics, direction);
    setText(newSettings);
  }, interval);
}

function AutoTypeIntro({ topics, setTopic }) {
  const [[text, index, topic, direction, interval], setText] = useState(['', 0, topics[0], 'forward', 75]);
  autoType(text, index, topic, topics, direction, setText, interval);
  return (
    <OverallComponent onClick={() => setTopic(topic)}>
      <AutoTypeIntroComponent>
        {text}
        <Blinker />
      </AutoTypeIntroComponent>
      <BarComponent />
    </OverallComponent>
  );
}

const AutoTypeIntroComponent = styled.div`
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

export default AutoTypeIntro;
