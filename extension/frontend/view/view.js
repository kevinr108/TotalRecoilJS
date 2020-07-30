import React, { useEffect, useState, useRef } from 'react';
import ReactDOM from 'react-dom';

import Container from './Container'

const App = () => {
  return (
    <div>
      <Container />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

