import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import SelectContributionLanguage from './selectcontributionlanguage';
import ContributionTopic from './contributiontopic';
import ContributionCode from './contributioncode';
import SubmitContribution from './submitcontribution';
import ExitButton from './exitbutton';

function submitFields(contributionLanguage, contributionTopic, contributionCode, setVisibility) {
  const contribution = {
    language: contributionLanguage,
    topic: contributionTopic,
    code: contributionCode,
  };

  axios.post('/contributions', contribution);

  setVisibility('hidden');
}

function Contribute({ visibility, setVisibility }) {
  const [contributionLanguage, setContributionLanguage] = useState('javascript');
  const [contributionTopic, setContributionTopic] = useState('');
  const [contributionCode, setContributionCode] = useState('');

  const submitButton = (
    <SubmitContribution
      submitAllFields={() => {
        submitFields(contributionLanguage, contributionTopic, contributionCode, setVisibility);
      }}
    />
  );

  const exitButton = (
    <ExitButton
      setVisibility={() => {
        setVisibility('hidden');
      }}
    />
  );

  return (
    <ContributeComponent visibility={visibility}>
      <SelectContributionLanguage
        setContributionLanguage={setContributionLanguage}
        exitButton={exitButton}
      />
      <ContributionTopic setContributionTopic={setContributionTopic} />
      <ContributionCode setContributionCode={setContributionCode} submitButton={submitButton} />
    </ContributeComponent>
  );
}

const ContributeComponent = styled.div`
  position: absolute;
  top: 100px;
  width: 750px;
  visibility: ${(props) => props.visibility};
  background-color: white;
  display: flex;
  flex-direction: column;
  font-size: 18px;
`;

export default Contribute;
