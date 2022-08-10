import React, { useState } from 'react';
import styled from 'styled-components';

import SelectContributionLanguage from './selectcontributionlanguage';
import ContributionTopic from './contributiontopic';
import ContributionCode from './contributioncode';
import SubmitContribution from './submitcontribution';

function submitFields(contributionLanguage, contributionTopic, contributionCode, setVisibility) {
  console.log('contribution language is:', contributionLanguage);
  console.log('contribution topic is:', contributionTopic);
  console.log('contribution code is:', contributionCode);
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

  return (
    <ContributeComponent visibility={visibility}>
      <SelectContributionLanguage setContributionLanguage={setContributionLanguage} />
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
