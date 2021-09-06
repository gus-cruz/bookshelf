import React from 'react';

import { useTheme } from 'styled-components';

import Logo from  '../../assets/logo.png';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { FaSearch } from 'react-icons/fa';

import {
  Container,
  Form
} from './style';

const Home = () => {
  const theme = useTheme();

  return (
    <Container>
      <Header />
      <Form>
        <img width="308px" src={Logo} alt="bookshelf"/>
        <p>A simple book finder</p>
        <div>
          <input placeholder="Type author, book name . . ." type="text" />
          <button><FaSearch size={20} color={theme.colors.text.button}/></button>
        </div>
      </Form>
      <Footer />
    </Container>
  )
};

export default Home;