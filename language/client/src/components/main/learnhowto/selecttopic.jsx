import React from 'react';
import styled from 'styled-components';

function SelectTopic({ setTopic }) {
  const topics = ['Say I am Batman', 'Write an if statement', 'Create a for loop', 'Write a function'];

  let key = 0;
  const options = topics.map((topic) => {
    key += 1;
    return <option key={key}>{topic}</option>;
  });

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
