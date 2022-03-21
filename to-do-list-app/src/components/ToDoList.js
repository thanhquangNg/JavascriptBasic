import React from "react";

import Todos from './Todos.js';

const ToDoList = ({todos, setTodos,filteredTodos}) => {
    return(
        <div className="todo-list-container">
            <ul className="todo-list">
            {filteredTodos.map(todo =>(
                <Todos 
                todos={todos} 
                setTodos={setTodos} 
                Todo={todo}
                key={todo.id} 
                text={todo.text}  />

            ))}
            </ul>
        </div>
    );
};

export default ToDoList