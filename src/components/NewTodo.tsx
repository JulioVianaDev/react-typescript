import React from 'react';

const NewTodo = ()=>{
  const submitHandler = (event: React.FormEvent)=>{
    event.preventDefault();
    
  }

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text" >todo text</label>
      <input type="text"  id='text' />
      <button>Enviar</button>
    </form>
  )
} 

export default NewTodo;