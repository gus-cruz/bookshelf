import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  
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