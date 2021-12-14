import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faUserPlus,
  faFolderPlus,
  faSearch,
  faFilter,
  faCaretDown,
  faCaretRight,
} from '@fortawesome/free-solid-svg-icons';

import { useMemo } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Friends from './ui/friends';
import './assets/css/fonts.css';

library.add(faUserPlus, faFolderPlus, faSearch, faFilter, faCaretDown, faCaretRight);

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Open Sans', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #2c2c2c;
  }
`;

const App = () => {
  const friends = useMemo(
    () => [
      {
        id: 1,
        name: 'Leodecko',
        groupId: 4,
        online: true,
      },
      {
        id: 2,
        name: 'Shinobu',
        groupId: 3,
        online: true,
      },
      {
        id: 3,
        name: 'TavoOzl',
        groupId: 2,
      },
      {
        id: 4,
        name: 'Test',
        groupId: 1,
      },
      {
        id: 5,
        name: '2B',
        groupId: 5,
      },
      {
        id: 6,
        name: 'Nickke',
        groupId: 4,
        online: false,
      },
    ],
    []
  );

  const groups = useMemo(
    () => [
      {
        id: 1,
        name: 'General',
      },
      {
        id: 2,
        name: 'Desconectado',
      },
      {
        id: 3,
        name: 'Nombres (y)',
      },
      {
        id: 4,
        name: 'Amigos',
      },
      {
        id: 5,
        name: 'Yorha',
      },
    ],
    []
  );

  const theme = {
    mainBG: '#031217',
    mainColor: '#9f9a8c',
  };

  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <Friends friends={friends} groups={groups}></Friends>
        <GlobalStyle />
      </ThemeProvider>
    </div>
  );
};

export default App;
