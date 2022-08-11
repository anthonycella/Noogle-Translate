import React from 'react';
import styled from 'styled-components';

import getTabFromLanguage from './gettab';
import LanguagesTab from './languagestab';

function Tabs({ selectedLanguage, setSelectedLanguage, languages }) {
  let key = 100;
  const tabs = languages.map((language) => {
    key += 1;
    return getTabFromLanguage(selectedLanguage, setSelectedLanguage, language, key);
  });

  if (tabs.length === 0) {
    const languagesTab = [<LanguagesTab key={99} />];
    const listOfLanguages = [
      'javascript',
      'typescript',
      'python',
      'java',
      'c++',
      'go',
    ];

    let exampleKey = 100;
    const exampleLanugages = listOfLanguages.map((language) => {
      exampleKey += 1;
      return getTabFromLanguage('', () => null, language, exampleKey);
    });

    const fullList = languagesTab.concat(exampleLanugages);

    return (
      <TabsComponent>
        {fullList}
      </TabsComponent>
    );
  }
  return (
    <TabsComponent>
      {tabs}
    </TabsComponent>
  );
}

const TabsComponent = styled.div`
  display: flex;
  flex-direction: row;
  height: 50px;
  width: 750px;
`;

export default Tabs;
