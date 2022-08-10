import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

import Title from './components/title/title';
import Main from './components/main/main';

function App() {
  const [data, setData] = React.useState({});

  if (Object.keys(data).length === 0) {
    axios.get('/topics')
      .then((response) => {
        const responseTopics = response.data;
        console.log(responseTopics);
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

  return (
    <AppComponent className="App">
      <Title />
      <Main data={data} />
    </AppComponent>
  );
}

const AppComponent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export default App;
