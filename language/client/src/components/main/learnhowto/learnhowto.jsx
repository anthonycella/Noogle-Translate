import React from 'react';
import styled from 'styled-components';

// import SelectTopic from './selecttopic';
import AutoTypeIntro from './autotypeintro';
// import MagnifyingGlass from './magnifyingglass';
import Search from './search/search';

function LearnHowTo({
  setTopic, topics, topic, searchBarVisibility, trie, setSearchBarVisibility
}) {
  if (searchBarVisibility) {
    return (
      <LearnHowToComponent>
        Learn how to
        &nbsp;
        <Search trie={trie} setTopic={setTopic} />
        &nbsp;
        in...
      </LearnHowToComponent>
    );
  }
  return (
    <LearnHowToComponent>
      Learn how to
      &nbsp;
      <AutoTypeIntro onClick={() => setSearchBarVisibility(true)} topics={topics} />
      &nbsp;
      in...
    </LearnHowToComponent>
  );
}

const LearnHowToComponent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 36px;
  margin: 15px;
`;

// if (topic === 'Select a topic to begin') {
//   return (
//     <LearnHowToComponent>
//       Learn how to
//       &nbsp;
//       <AutoTypeIntro setTopic={setTopic} topics={topics} />
//       &nbsp;
//       in...
//     </LearnHowToComponent>
//   );
// }

// return (
//   <LearnHowToComponent>
//     Learn how to
//     &nbsp;
//     <SelectTopic setTopic={setTopic} topics={topics} selectedTopic={topic} />
//     &nbsp;
//     <MagnifyingGlass />
//     &nbsp;
//     in...
//   </LearnHowToComponent>
// );

export default LearnHowTo;
