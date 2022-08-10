/* eslint-disable no-param-reassign */
import React, { useState } from 'react';
import styled from 'styled-components';

function getBlankText() {
  let blankText = '';

  for (let i = 0; i < 25; i += 1) {
    blankText += ' ';
  }

  return blankText;
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
    newText[index] = ' ';
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

function AutoTypeIntro({ topics, startSearch }) {
  const [blinker, setBlinker] = useState('|');
  const [[text, index, topic, direction, interval], setText] = useState([getBlankText(), 0, topics[0], 'forward', 75]);
  autoType(text, index, topic, topics, direction, setText, interval, blinker);
  return (
    <OverallComponent>
      <AutoTypeIntroComponent onClick={startSearch}>
        {text}
      </AutoTypeIntroComponent>
      <BarComponent />
    </OverallComponent>
  );
}

const AutoTypeIntroComponent = styled.div`
  display: flex;
  flex-direction: row;
  width: 300px;
  white-space: pre;
  font-size: 34px;
`;

const OverallComponent = styled.div`
  display: flex;
  flex-direction: column;
`;

const BarComponent = styled.div`
  height: 3px;
  width: 300px;
  background-color: black;
`;

export default AutoTypeIntro;
