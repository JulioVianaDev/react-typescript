import React from 'react';
import Todos from './components/Todos';

import './App.css';

function App() {
  return (
    <div className="App">
      <Todos items={['learn react','i love react']}/>
    </div>
  );
}

export default App;
