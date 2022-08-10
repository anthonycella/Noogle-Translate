import React from 'react';
import styled from 'styled-components';

function SelectContributionLanguage({ setContributionLanguage, exitButton }) {
  return (
    <OverallContainer>
      Select Language:
      <SelectContributionLanguageComponent
        onChange={(event) => setContributionLanguage(event.target.value.toLowerCase())}
      >
        <option>Javascript</option>
        <option>Python</option>
        <option>Java</option>
        <option>Typescript</option>
        <option>C++</option>
        <option>Go</option>
      </SelectContributionLanguageComponent>
      {exitButton}
    </OverallContainer>
  );
}

const OverallContainer = styled.span`
  font-size: 18px;
  padding: 15px;
  border: 1px solid black;
`;

const SelectContributionLanguageComponent = styled.select`
  text-align: center;
  font-size: 18px;
  margin: 15px;
  border: 1px solid black;
  border-radius: 5px;
`;

export default SelectContributionLanguage;
