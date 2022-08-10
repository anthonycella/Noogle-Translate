import React, { useState } from 'react';
import styled from 'styled-components';

import SelectContributionLanguage from './selectcontributionlanguage';
import ContributionTopic from './contributiontopic';
import ContributionCode from './contributioncode';

import ContributionButton from './contributionbutton';

function Contribute({ popUpAModal }) {
  const [contributionLanguage, setContributionLanguage] = useState('javascript');
  const [contributionTopic, setContributionTopic] = useState('');
  const [contributionCode, setContributionCode] = useState('');

  return (
    <ContributeComponent>
      <SelectContributionLanguage setContributionLanguage={setContributionLanguage} />
      <ContributionTopic setContributionTopic={setContributionTopic} />
      <ContributionCode setContributionCode={setContributionCode} />
      <ContributionButton onClick={popUpAModal} />
    </ContributeComponent>
  );
}

const ContributeComponent = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  margin: 25px;
`;

export default Contribute;
