import React from 'react';

import PythonTab from './pythontab';
import JavaTab from './javatab';
import TypescriptTab from './typescripttab';
import CPlusPlusTab from './c++tab';
import GoTab from './gotab';

function getTabFromLanguage(selectedLanguage, setSelectedLanguage, language, key) {
  switch (language) {
    case 'python':
      return (
        <PythonTab
          selectedLanguage={selectedLanguage}
          setLanguageToPython={() => setSelectedLanguage('python')}
          key={key}
        />
      );
    case 'java':
      return (
        <JavaTab
          selectedLanguage={selectedLanguage}
          setLanguageToJava={() => setSelectedLanguage('java')}
          key={key}
        />
      );
    case 'typescript':
      return (
        <TypescriptTab
          selectedLanguage={selectedLanguage}
          setLanguageToTypescript={() => setSelectedLanguage('typescript')}
          key={key}
        />
      );
    case 'c++':
      return (
        <CPlusPlusTab
          selectedLanguage={selectedLanguage}
          setLanguageToCPlusPlus={() => setSelectedLanguage('c++')}
          key={key}
        />
      );
    case 'go':
      return (
        <GoTab
          selectedLanguage={selectedLanguage}
          setLanguageToGo={() => setSelectedLanguage('go')}
          key={key}
        />
      );
    default:
      return (
        <div />
      );
  }
}

export default getTabFromLanguage;
