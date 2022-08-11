import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

import Title from './components/title/title';
import Main from './components/main/main';
import Trie from './trie';

function App() {
  const prefixTrie = new Trie('root');
  prefixTrie.insertChild('apple');
  prefixTrie.insertChild('app in store');
  const printable = prefixTrie.startsWith('app');
  console.log('Trie is', printable);

  const [data, setData] = React.useState({});
  const [searchBarVisibility, setSearchBarVisibility] = React.useState(false);

  if (Object.keys(data).length === 0) {
    axios.get('/topics')
      .then((response) => {
        const responseTopics = response.data;
        // console.log(responseTopics);
        const results = responseTopics.map((topic) => axios({
          method: 'get',
          url: '/contributions',
          params: {
            topic,
          },
        }));

        Promise.all(results)
          .then((topicsFromDatabase) => {
            const newTopics = {};
            topicsFromDatabase.map((entry) => {
              const topic = entry.data;
              newTopics[topic.topic] = {};

              topic.results.map((result) => {
                newTopics[topic.topic][result.language] = result.code;
                return true;
              });

              return true;
            });
            setData(newTopics);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
    return <div />;
  }

  function turnOffSearchBarVisibility(event) {
    // console.log(event.target.closest('div').className);

    let identifier = event.target.className;
    let isSearchBarElement = typeof identifier === 'string' && identifier.includes('search-bar');
    if (!isSearchBarElement) {
      identifier = event.target.closest('div').className;
      isSearchBarElement = identifier.includes('search-bar');
    }
    if (isSearchBarElement) {
      // console.log('turning on search bar visibility');
      setSearchBarVisibility(true);
    } else {
      // console.log('turning off search bar visibility');
      setSearchBarVisibility(false);
    }
  }

  return (
    <AppComponent className="App" onClick={(event) => turnOffSearchBarVisibility(event)}>
      <Title />
      <Main
        data={data}
        searchBarVisibility={searchBarVisibility}
        setSearchBarVisibility={setSearchBarVisibility}
      />
    </AppComponent>
  );
}

const AppComponent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export default App;
