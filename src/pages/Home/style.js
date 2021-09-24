import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 0.2s;

  div{
    display: flex;
  }

  p {
    margin: 16px 0 40px;;
  }

  input {
    height: 48px;
    width: 380px;
    border: none;
    padding: 16px;
    border-radius: 4px 0 0 4px;
    background: ${props => props.theme.colors.contrast};
    color: ${props => props.theme.colors.text.regular};

    transition: background 0.4s;

    &::placeholder { 
      color: ${props => props.theme.colors.text.thin};
      opacity: 1; 
    }
    &:-ms-input-placeholder { 
      color: ${props => props.theme.colors.text.thin};
    }
    &::-ms-input-placeholder { 
      color: ${props => props.theme.colors.text.thin};
    }
  }

  button {
    border: none;
    border-radius: 0 4px 4px 0;
    height: 48px;
    padding: 16px 24px;
    background: ${props => props.theme.colors.primary};
    display: flex;
    align-items: center;

    transition: background 0.2s;
    &:hover {
      background: ${props => shade(0.12, props.theme.colors.primary)};
    }
  }
`;


export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;

  .loading {
    height: 0;
    margin-bottom: 80px;
  }
`;


export const Result = styled.div`
  transition: 1s;
  height: ${({isOpen}) => isOpen ? '100%' : 0};
  overflow: hidden;
  max-width: 1400px;
  
 
 
  .books {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    @media (max-width: 1080px) {
      grid-template-columns: repeat(1, 1fr);
    }  
    grid-column-gap: 32px;
    grid-row-gap: 32px;

    

    .book {
      display: flex;
      max-width: 560px;
      border-radius: 8px;

      transition: all 0.2s, border 0.4s;

      border: 2px solid ${props => props.theme.colors.background};

      &:hover {
        cursor: pointer;
        transform: scale(0.99);
        border: 2px solid ${props => props.theme.colors.border};
      }

      img {
        width: 128px;
        height: 192px;
        border-radius: 8px 0 0 8px;
      }

      .book-info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 16px;
      
        .info-header {
          div {
            display: flex;
            flex-wrap: wrap;
          }
          .book-title {
            color: ${props => props.theme.colors.text.regular};
            margin-right: 8px;
          }
    
          .book-author {
            color: ${props => props.theme.colors.text.light};
          }

          .book-synopsis {
            color: ${props => props.theme.colors.text.regular};
            font-size: 14px;
            margin-top: 16px;
          }
        }

        .info-footer {
          display: flex;
          color: ${props => props.theme.colors.text.light};

          p {
            margin-left: 8px;
          }

          .book-date {
            margin-left: 32px;
          }

          div {
            display: flex;
          }
        }
      }
    }
  }
`;