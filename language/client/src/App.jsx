import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';

import Title from './components/title/title';
import Main from './components/main/main';

import LoginButton from './login/loginbutton';
import LogoutButton from './login/logoutbutton';
// import Profile from './login/profile';

import Trie from './trie';

function App() {
  const [[data, trie], setData] = React.useState([{}, null]);
  const [searchBarVisibility, setSearchBarVisibility] = React.useState(false);

  const { isAuthenticated } = useAuth0();
  // console.log("🚀 ~ file: App.jsx ~ line 20 ~ App ~ isAuthenticated", isAuthenticated);

  let profileElement = null;

  if (trie !== null) {
    profileElement = isAuthenticated ? <LogoutButton /> : <LoginButton />;
  }

  if (Object.keys(data).length === 0) {
    const prefixTrie = new Trie('root');

    axios.get('/topics')
      .then((response) => {
        const responseTopics = response.data;
        // console.log(responseTopics);
        const results = responseTopics.map((topic) => {
          prefixTrie.insertChild(topic);
          return axios({
            method: 'get',
            url: '/contributions',
            params: {
              topic,
            },
          });
        });

        Promise.all(results)
          .then((topicsFromDatabase) => {
            // console.log(prefixTrie);
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
            setData([newTopics, prefixTrie]);
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
    console.log(event.target.className);

    let identifier = event.target.className;

    if (identifier.includes('ignore')) {
      return;
    }

    let isSearchBarElement = typeof identifier === 'string' && identifier.includes('search-bar');
    if (!isSearchBarElement) {
      identifier = event.target.closest('div').className;
      isSearchBarElement = identifier.includes('search-bar');
    }
    if (isSearchBarElement) {
      console.log('turning on search bar visibility');
      setSearchBarVisibility(true);
    } else {
      console.log('turning off search bar visibility');
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
        trie={trie}
      />
      {profileElement}
    </AppComponent>
  );
}

const AppComponent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export default App;
