import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./Todo.css";

function Todo({ todo, remove, update, toggleComplete }) {
    const [isEditing, setIsEditing] = useState(false);
    const [task, setTask] = useState(todo.task);

    const handleClick = (evt) => {
        remove(evt.target.id);
    };
    const toggleFrom = () => {
        setIsEditing(!isEditing);
    };
    const handleUpdate = (evt) => {
        evt.preventDefault();
        update(todo.id, task);
        toggleFrom();
    };
    const handleChange = (evt) => {
        setTask(evt.target.value);
    };
    const toggleCompleted = (evt) => {
        toggleComplete(evt.target.id);
    };

    let result;
    if (isEditing) {
        result = (
            <div className="Todo">
                <form className="Todo-edit-form" onSubmit={handleUpdate}>
                    <input onChange={handleChange} value={task} type="text" />
                    <button>Save</button>
                </form>
            </div>
        );
    } else {
        result = (
            <div className="Todo">

                <button
                    id={todo.id}
                    onClick={toggleCompleted}
                    className={todo.completed ? "Todo-task completed" : "Todo-task"}
                >
                    Done
                </button>

                <li
                    id={todo.id}
                    // onClick={toggleCompleted}
                    className={todo.completed ? "Todo-task completed" : "Todo-task"}
                >
                    {todo.task}
                </li>


                <button onClick={handleClick} id={todo.id}>
                        Delete
                </button>
            
            </div>
        );
    }
    return result;
}

export default Todo;
