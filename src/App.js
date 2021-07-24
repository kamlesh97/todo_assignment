import React,{useState,useEffect} from 'react'
import Form from './components/Form';
import TodoList from './components/TodoList';

const App = () => {
  
  const initialState=JSON.parse(localStorage.getItem('todos')) || [];
  const [input, setInput] = useState('');
    const [todos, setTodos] = useState(initialState);
    const [edit, setEdit] = useState(null);

  useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(todos));
  },[todos])

  return (
    <div className='app'>
      <h1>TODO</h1>
      <Form
      input={input}
      setInput={setInput}
      todos={todos}
      setTodos={setTodos}
      edit={edit} setEdit={setEdit}

      />

      <TodoList todos={todos}
      setTodos={setTodos} edit={edit} setEdit={setEdit} />
    </div>
  )
}

export default App
