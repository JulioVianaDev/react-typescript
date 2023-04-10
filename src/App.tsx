import React from 'react';
import Todos from './components/Todos';
import Todo from './models/todo';
import './App.css';
import NewTodo from './components/NewTodo';

function App() {
  const todos =[
    new Todo('aprendendo react'),
    new Todo('aprendendo com typescript'), 
  ];

  const addTodo=(texto: string)=>{
    let newTodo = new Todo(texto);
    todos.push(newTodo);
  }
  return (
    <div className="App">
      <NewTodo onAddTodo={addTodo}/>
      <Todos items={todos}/>
    </div>
  );
}

export default App;
