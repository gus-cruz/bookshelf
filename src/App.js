import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';

import React from 'react';

import usePersistedState from './utils/usePersistedState';

import light from './styles/themes/light';
import dark from './styles/themes/dark';

import Routes from './routes';

export const ToggleThemeContext = React.createContext({});

function App() {
  const [theme, setTheme] = usePersistedState('theme', light);
  
  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  }

  return (
    <>
    <ToggleThemeContext.Provider value={toggleTheme}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
        <GlobalStyle />
      </ThemeProvider>
    </ToggleThemeContext.Provider>
    </>
  );
}

export default App;
