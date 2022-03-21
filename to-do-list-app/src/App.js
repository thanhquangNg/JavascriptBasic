import React, { useState,useEffect } from 'react';
import './App.css';
// import components
import Form from './components/Form.js'
import ToDoList from './components/ToDoList.js';
import Todos from './components/Todos';


function App() {
  // State variables
  const [input, setInput] = useState("");
  const [Todo, setTodo] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);
  // RUN ONCE WHEN START
  useEffect(() => {
    getLocalTodos();
  },[]);
  // USE EFFECT
 useEffect(()=>{
  filterHandler();
  saveLocalTodos();
  }, [Todo,status]);

  //  Functions
  const filterHandler = () =>{
    switch(status){
      case 'completed':
        setFilteredTodos(Todo.filter(todo =>todo.completed === true));
        break;

      case 'uncompleted':
        setFilteredTodos(Todo.filter(todo =>todo.completed === false));
        break;

      default:
        setFilteredTodos(Todo);
        break;
    }
  };

  // save to local
  const saveLocalTodos = () =>{
      localStorage.setItem("Todo", JSON.stringify(Todo));
    };
  

  const getLocalTodos = () => {
    if(localStorage.getItem('Todo') === null){
      localStorage.setItem('Todo',JSON.stringify([]));
    } else{
      let localTodos = JSON.parse(localStorage.getItem("Todo"));
      setTodo(localTodos);
    }
  }
  return (
    <div className="App">
      <header>
      <h1>TO DO LIST APPLICATION</h1>
      <Form 
      inputText={input} 
      setInput={setInput} 
      Todo={Todo} 
      setTodo ={setTodo}
      setStatus = {setStatus} 
      />
      <ToDoList 
      todos={Todo} 
      setTodos={setTodo} 
      filteredTodos={filteredTodos} />
      </header>
    </div>

  );
}

export default App;
