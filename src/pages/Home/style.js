import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .search-animation {
    animation: search-animation .8s forwards;

    @keyframes search-animation {
      0% { transform: translateY(0);}
      100% { transform: translateY(-5vh); }
    }
  }

  .books-animation {
    animation: books-animation 1.6s forwards;

    @keyframes books-animation {
      0% { opacity: 0; }
      40% { transform: translateY(30px); opacity: 0  }
      100% { transform: translateY(0); opacity: 1  }
    }
  }
`;

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 0.2s;
  animation: appear .8s forwards;

  width: 100%;
  max-width: 432px;

  @keyframes appear {
  0% { transform: translateY(30px) }
  100% { transform: translateY(0) }
  }

  img {
    animation: image-appear 1s forwards;

    @keyframes image-appear {
    0% { opacity: 0 }
    100% { opacity: 1 }
    }
  }

  div{
    display: flex;
    width: 100%;
    max-width: 432px;

    animation: input-appear 1.6s forwards;

    @keyframes input-appear {
      0% { opacity: 0 }
      20% { transform: translateY(30px); opacity: 0; }
      100% { transform: translateY(0); opacity: 1  }
    }
  }

  p {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 16px 0 40px;
    white-space: nowrap;
    overflow: hidden;
    
    animation: text-appear 3s forwards;

    @keyframes text-appear {
      0% { width: 0; opacity: 0  }
      20% { width: 0; opacity: 0; border-radius: 50%;  }
      100% { width: 100%; opacity: 1; border-radius: 0; }
    }
  }

  input {
    height: 48px;
    width: 100%;
   
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
  width: 100%;

  padding: 24px;

  .loading {
    height: 0;
    margin-bottom: 80px;
  }

  .form {
    width: 100%;
    max-width: 432px;
  }


`;


export const Result = styled.div`
  transition: 1s;
  overflow: hidden;
  max-width: 1400px;
  
  
  @keyframes open-result {
    0% { height: 0; }
    100% { height: 100%; }
  }
 
  .books {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 32px;
    grid-row-gap: 32px;
     
    @media (max-width: 1080px) {
      grid-template-columns: repeat(1, 1fr);
    }  
  
    .book {
      display: flex;
      max-width: 560px;
      border-radius: 8px;

      transition: all 0.2s, border 0.4s;

      border: 2px solid ${props => props.theme.colors.background};

      svg {
        transition: 0.2s;
      }

      &:hover {
        cursor: pointer;
        transform: translateX(10px);
        border: 2px solid ${props => props.theme.colors.border};
       
        svg {
          color: ${props => props.theme.colors.primary};
        }
      }

      img {
        width: 100%;
        height: 100%;
        max-width: 128px;
        max-height: 192px;
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