import React from 'react';
import styled from 'styled-components';

function SelectTopic({ setTopic }) {
  return (
    <SelectTopicComponent onChange={(event) => setTopic(event.target.value)}>
      <option>
        Say
        &nbsp;
        <q>I am Batman</q>
      </option>
      <option>Create a for loop</option>
      <option>Write an if statement</option>
      <option>Write a function</option>
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
