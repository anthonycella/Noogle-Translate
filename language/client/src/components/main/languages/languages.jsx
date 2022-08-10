import React, { useState } from 'react';
import styled from 'styled-components';

import Tabs from './tabs/tabs';
import CodeBox from './codebox/codebox';

function getLanguages(languageData) {
  const languages = [];
  if (languageData.javascript) {
    languages.push('javascript');
  }

  if (languageData.typescript) {
    languages.push('typescript');
  }

  if (languageData.python) {
    languages.push('python');
  }

  if (languageData.java) {
    languages.push('java');
  }

  if (languageData['c++']) {
    languages.push('c++');
  }

  if (languageData.go) {
    languages.push('go');
  }

  return languages;
}

function Languages({ topic, languageData }) {
  const languages = getLanguages(languageData);
  const [selectedLanguage, setSelectedLanguage] = useState('');

  const textContent = languageData[selectedLanguage] || 'Select a language to begin';
  return (
    <LanguagesComponent>
      <Tabs
        selectedLanguage={selectedLanguage}
        setSelectedLanguage={setSelectedLanguage}
        languages={languages}
      />
      <CodeBox
        topic={topic}
        textContent={textContent}
        language={selectedLanguage}
      />
    </LanguagesComponent>
  );
}

const LanguagesComponent = styled.div`
  margin-top: 25px;
  min-height: 750px;
  width: 750px;
`;

export default Languages;
