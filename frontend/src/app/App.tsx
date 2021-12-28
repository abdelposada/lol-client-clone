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
import { useAppDispatch, useAppSelector } from './hooks';
import { addFriend } from '../features/social/socialSlice';
import ProfileCard from '../features/profile/ProfileCard';
import Social from '../features/social';
import '../assets/css/fonts.css';

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
  const friends = useAppSelector(({ social }) => social.friends);
  const groups = useAppSelector(({ social }) => social.groups);

  const theme = {
    mainBG: '#031217',
    mainColor: '#9f9a8c',
  };

  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <ProfileCard name="Tatsumaki" icon="5200" message="kappataz" level={420.5} />
        <Social friends={friends} groups={groups} />
        <GlobalStyle />
      </ThemeProvider>
    </div>
  );
};

export default App;
