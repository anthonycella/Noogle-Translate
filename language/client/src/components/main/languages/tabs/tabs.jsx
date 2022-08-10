import React from 'react';
import styled from 'styled-components';

import getTabFromLanguage from './gettab';

function Tabs({ selectedLanguage, setSelectedLanguage, languages }) {
  let key = 100;
  const tabs = languages.map((language) => {
    key += 1;
    return getTabFromLanguage(selectedLanguage, setSelectedLanguage, language, key);
  });

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
