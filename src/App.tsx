import React from 'react';
import Todos from './components/Todos';
import Todo from './models/todo';
import './App.css';

function App() {
  const todos =[
    new Todo('aprendendo react'),
    new Todo('aprendendo com typescript'),
  ];
  return (
    <div className="App">
      <Todos items={['learn react','i love react']}/>
    </div>
  );
}

export default App;
