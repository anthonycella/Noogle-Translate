import React, { useState } from 'react';
import styled from 'styled-components';

import Tabs from './tabs/tabs';
import CodeBox from './codebox/codebox';

function Languages({ topic }) {
  const [selectedLanguage, setSelectedLanguage] = useState('python');

  return (
    <LanguagesComponent>
      <Tabs selectedLanguage={selectedLanguage} setSelectedLanguage={setSelectedLanguage} />
      <CodeBox selectedLanguage={selectedLanguage} topic={topic} />
    </LanguagesComponent>
  );
}

const LanguagesComponent = styled.div`
  margin-top: 25px;
  min-height: 750px;
  width: 750px;
`;

export default Languages;
