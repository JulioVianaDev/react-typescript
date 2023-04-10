import React,{useState} from 'react';
import Todos from './components/Todos';
import Todo from './models/todo';
import './App.css';
import NewTodo from './components/NewTodo';

function App() {
  const [todos,setTodos] = useState<Todo[]>([])
  const addTodo=(texto: string)=>{
    let newTodo = new Todo(texto);
    setTodos((prevState)=>{
      return prevState.concat(newTodo);
    })
  }

  const removeTodoHandler = (id: string)=>{
    setTodos((prevState)=>{
      return prevState.filter(todo=> todo.id !== id);
    })
  } 
  return (
    <div className="App">
      <NewTodo onAddTodo={addTodo}/>
      <Todos items={todos} onRemoveTodo={removeTodoHandler}/>
    </div>
  );
}

export default App;
