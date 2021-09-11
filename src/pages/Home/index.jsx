import React, { useCallback, useRef, useState } from 'react';
import api from '../../services/api';

import { useTheme } from 'styled-components';
import { Form } from '@unform/web'

import Logo from  '../../assets/logo.png';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Loading from '../../components/Loading';

import { FaSearch } from 'react-icons/fa';

import {
  Container,
  FormContent,
  Result,
  Section
} from './style';

const Home = () => {
  const theme = useTheme();
  const formRef = useRef();

  const [input, setInput] = useState('');
  const [loading, setLoding] = useState(false);
  const [hasResult, setHasResult] = useState(false);

  const handleSubmit = useCallback(async () => {
    setInput('');
    setLoding(true);

    try{
      let data = await api.get(`/volumes?q=${input}`);
      console.log(data);
      setLoding(false);
      setHasResult(true);
      return "success";
    } catch(err) {
      setLoding(false);
      return err;
    }

  });

  return (
    <Container>
      <Header />
      <Section>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <FormContent>
            <img width="308px" src={Logo} alt="bookshelf"/>
            <p>A simple book finder</p>
            <div>
              <input value={input} onInput={e => setInput(e.target.value)} placeholder="Type author, book name . . ." type="text" name="name"/>
              <button type="submit"><FaSearch size={20} color={theme.colors.text.button}/></button>
            </div>
          </FormContent>
        </Form>
          <div className="loading">
            { loading ? <Loading /> : null }
          </div>
        <Result isOpen={hasResult}>
        </Result>
       
      </Section>
      <Footer />
    </Container>
  )
};

export default Home;