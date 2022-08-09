import React from 'react';
import styled from 'styled-components';

import PythonTab from './pythontab';
import JavaTab from './javatab';
import TypescriptTab from './typescripttab';

function Tabs() {
  return (
    <TabsComponent>
      <PythonTab />
      <JavaTab />
      <TypescriptTab />
    </TabsComponent>
  );
}

const TabsComponent = styled.div`
  display: flex;
  flex-direction: row;
  height: 50px;
  width: 750px;
  border: 1px solid blue;
`;

export default Tabs;
