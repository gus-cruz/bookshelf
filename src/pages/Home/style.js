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

  .loading {
    height: 0;
  }
`;


export const Result = styled.div`
  transition: 1s;
  height: ${({isOpen}) => isOpen ? '300px' : 0};
`;