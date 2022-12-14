import React from 'react';
import styled from 'styled-components';

function SelectTopic({ setTopic, topics, selectedTopic }) {
  let key = 0;
  const options = topics.map((topic) => {
    key += 1;
    return <option key={key}>{topic}</option>;
  });

  const indexOfBatman = topics.indexOf(selectedTopic);
  const temp = options[indexOfBatman];
  // eslint-disable-next-line prefer-destructuring
  options[indexOfBatman] = options[0];
  options[0] = temp;

  return (
    <SelectTopicComponent onChange={(event) => setTopic([event.target.value, false])}>
      {options}
    </SelectTopicComponent>
  );
}

const SelectTopicComponent = styled.select`
  &:hover {
    color: #4885ed;
    cursor: pointer;
  }
  text-align: center;
  width: 265px;
  height: 36px;
  font-size: 24px;
  background-color: #CCC;
  border: 1px solid #CCC;
  color: #333;
  border-radius: 5px;
`;

export default SelectTopic;
