import React from "react";

const Form = ({inputText,setInput,Todo,setTodo,setStatus}) =>{
    //code and function
    const inputHandler = (e) =>{
        console.log(e.target.value);
        setInput(e.target.value)
    };

    const submitTodoHandler = (e) =>{
        e.preventDefault();
        setTodo([
            ...Todo,
            {text: inputText, completed:false, id: Math.random()*1000}
        ]);
        setInput('');

    };

    const statusHandler = (e) =>{
        setStatus(e.target.value)
    };
    return(
        <form className="form-container">
            <input value={inputText} onChange={inputHandler}type="text" className="todo-input" placeholder="to do..." />
            <button onClick={submitTodoHandler} type="submit" className="todo-btn">Add</button>
    
            <div className="select">
                <p>Filter <select onChange={statusHandler} name="filter" className="filter-todo">
                    <option value="all" className="value">All</option>
                    <option value="completed" className="value">Completed!</option>
                    <option value="uncompleted" className="value">Uncompleted!</option>
                </select></p>
                
            </div>
        </form>
        
    );
};

export default Form