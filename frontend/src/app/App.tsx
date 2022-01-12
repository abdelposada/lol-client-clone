import { createGlobalStyle, ThemeProvider } from 'styled-components';
import type {} from 'styled-components/cssprop';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faUserPlus,
  faFolderPlus,
  faSearch,
  faFilter,
  faCaretDown,
  faCaretRight,
} from '@fortawesome/free-solid-svg-icons';
import '../assets/css/fonts.css';
import AppRoutes from './AppRoutes';

library.add(faUserPlus, faFolderPlus, faSearch, faFilter, faCaretDown, faCaretRight);

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Open Sans', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #2c2c2c;
    letter-spacing: 1px;
  }
  html, body, #root {
    height: 100%;
  }
`;

const App = () => {
  const theme = {
    mainBG: '#031217',
    mainColor: '#9f9a8c',
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppRoutes />
    </ThemeProvider>
  );
};

export default App;
