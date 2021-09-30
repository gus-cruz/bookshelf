import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;

  animation: delay-to-appear 3s forwards;

  a {
    margin: 0 16px;
    color: ${props => props.theme.colors.text.light};
  
    transition: color 0.2s;
    &:hover {
      color: ${props => props.theme.colors.primary};
    }
  }
`;