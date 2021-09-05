import React, { useContext } from 'react';

import { useTheme } from 'styled-components';
import { ToggleThemeContext } from '../../App';

import { FaMoon, FaSun } from 'react-icons/fa';

import {
  Container,
  Button
} from './style'

const Header = () => {
  const theme = useTheme();

  const toggleTheme = useContext(ToggleThemeContext);

  return (
    <Container>
      <Button>
        { theme.title === 'light' ?  <FaMoon onClick={toggleTheme} size={20} color={theme.colors.shadow}/> : <FaSun onClick={toggleTheme} size={20} color={theme.colors.shadow}/>}
      </Button>
    </Container>
  );
}

export default Header;