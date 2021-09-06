import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 24px;
  width: 100%;
`;

export const Button = styled.div`
  margin-left: auto;

  svg {
    transition: 0.2s;
  }
  svg:hover {
    cursor: pointer;
    transform: scale(1.1);
    fill: ${props => props.theme.colors.text.thin};
  }
`;