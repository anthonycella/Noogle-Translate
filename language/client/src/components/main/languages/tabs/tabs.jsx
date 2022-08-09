import React from 'react';
import styled from 'styled-components';

import PythonTab from './pythontab';
import JavaTab from './javatab';
import TypescriptTab from './typescripttab';
import CPlusPlusTab from './c++tab';
import GoTab from './gotab';

function Tabs({ selectedLanguage, setSelectedLanguage }) {
  return (
    <TabsComponent>
      <PythonTab
        selectedLanguage={selectedLanguage}
        setLanguageToPython={() => setSelectedLanguage('python')}
      />
      <JavaTab
        selectedLanguage={selectedLanguage}
        setLanguageToJava={() => setSelectedLanguage('java')}
      />
      <TypescriptTab
        selectedLanguage={selectedLanguage}
        setLanguageToTypescript={() => setSelectedLanguage('typescript')}
      />
      <CPlusPlusTab
        selectedLanguage={selectedLanguage}
        setLanguageToTypescript={() => setSelectedLanguage('c++')}
      />
      <GoTab
        selectedLanguage={selectedLanguage}
        setLanguageToGo={() => setSelectedLanguage('go')}
      />
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
