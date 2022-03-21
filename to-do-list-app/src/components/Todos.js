import React from "react";

const Todos = ({text, Todo, todos, setTodos}) => {
    // events
    const deleteHandler = () =>{
        setTodos(todos.filter((el)  => el.id !== Todo.id))
    };
    const completHandler = () =>{
        setTodos(todos.map((item) =>{
            if(item.id === Todo.id){
                return{
                    ...item, completed:!item.completed
                }
            }
            return item;
        } ))
    }
    return(
        <div className={`${Todo.completed ? "todo-container-completed" : "todo-container"}`}>
            <li className="todo-item">{text}</li>
                <button onClick={deleteHandler}className="delete-btn">Delete</button>
                <button onClick={completHandler}className="complete-btn">Done</button>
                
        </div>
    );
};
export default Todos;
