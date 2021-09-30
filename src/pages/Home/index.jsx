import React, { useCallback, useRef, useState } from 'react';
import api from '../../services/api';

import { useTheme } from 'styled-components';
import { Form } from '@unform/web'

import Logo from  '../../assets/logo.png';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Loading from '../../components/Loading';

import { FaSearch, FaCalendar, FaBookmark } from 'react-icons/fa';

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
  const [books, setBooks] = useState([]);

  const handleSubmit = useCallback(async () => {
    setInput('');
    setLoding(true);
    setHasResult(false);

    try{
      let result = await api.get(`/volumes?q=${input}`);
      if(result.data.items){
        setBooks(result.data.items);
      }else{
        setBooks([]);
      }

      console.log(books);
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

            <p><span>A simple book finder</span></p>

            <div className="input">
              <input value={input} onInput={e => setInput(e.target.value)} placeholder="Type author, book name . . ." type="text" name="name"/>
              <button type="submit"><FaSearch size={20} color={theme.colors.text.button}/></button>
            </div>
          </FormContent>
        </Form>
          <div className="loading">
            { loading ? <Loading /> : null }
          </div>
        <Result isOpen={hasResult}>
          <div className="books">
            {books.length > 0 ?
              books.map(book => (
                <a className="book" target="_blank" href={book.volumeInfo.canonicalVolumeLink ? book.volumeInfo.canonicalVolumeLink : ""}>
                <img src={book.volumeInfo.imageLinks?.thumbnail ? book.volumeInfo.imageLinks?.thumbnail : ""} alt={book.volumeInfo.title ? book.volumeInfo.title : "Unknown Title"}/>
                <div className="book-info">
                  <div className="info-header">
                    <div>
                      <p className="book-title">{book.volumeInfo?.title ? book.volumeInfo?.title : "Unknown Title"}</p>
                      <p className="book-author">{book.volumeInfo?.authors[0] ? book.volumeInfo?.authors[0] : "Unknown Author"}</p>
                    </div>
                    <p className="book-synopsis">{book.searchInfo?.textSnippet ? book.searchInfo?.textSnippet : "No Synopsis Found"}</p>
                  </div>
                  <div className="info-footer">
                    <div className="book-publisher"><FaBookmark/><p>{book.volumeInfo.publisher ? book.volumeInfo.publisher : "Unknown"}</p></div>
                    <div className="book-date"><FaCalendar /><p>{book.volumeInfo.publishedDate ? book.volumeInfo.publishedDate : "Unknown"}</p></div>
                  </div>
                </div>
              </a>
              ))
            :
              null
            }
          </div> 
        </Result>
       
      </Section>
      <Footer />
    </Container>
  )
};

export default Home;