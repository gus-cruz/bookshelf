import React from 'react';

import { Container } from './style'

const Loading = () => {
  return (
    <Container>
      <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    </Container>
  )
}

export default Loading;

