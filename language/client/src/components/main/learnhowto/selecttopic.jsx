import React from 'react';
import styled from 'styled-components';

function SelectTopic({ setTopic, topics }) {
  let key = 0;
  const options = topics.map((topic) => {
    key += 1;
    return <option key={key}>{topic}</option>;
  });

  const indexOfBatman = topics.indexOf('Say I am Batman');
  const temp = options[indexOfBatman];
  // eslint-disable-next-line prefer-destructuring
  options[indexOfBatman] = options[0];
  options[0] = temp;

  return (
    <SelectTopicComponent onChange={(event) => setTopic(event.target.value)}>
      {options}
    </SelectTopicComponent>
  );
}

const SelectTopicComponent = styled.select`
  text-align: center;
  font-size: 24px;
  margin: 15px;
  background-color: #CCC;
  border: 1px solid #CCC;
  color: #333;
  border-radius: 5px;
`;

export default SelectTopic;
