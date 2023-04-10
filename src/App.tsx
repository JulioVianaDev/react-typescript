import React from 'react';
import Todos from './components/Todos';
import './App.css';
import NewTodo from './components/NewTodo';
import TodosContextProvider from './context/todos-context';
function App() {

  return (
    <div className="App">
      <TodosContextProvider>
        <NewTodo/>
        <Todos/>
      </TodosContextProvider>
    </div>
  );
}

export default App;
