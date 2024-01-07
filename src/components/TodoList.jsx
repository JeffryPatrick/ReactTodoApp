import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";

const TodoList = ({ todo, setTodo, setInput, setEditIndex }) => {

    const onEditHandle = (i) => {
        console.log(i);
        setInput(todo[i]);
        setEditIndex(i);
    }

    const onDeleteHandle = (id) => {
        const updateTodo = todo.filter((res, i) => i !== id);
        setTodo(updateTodo);
    }

    return (
        <div className="todo-list-wrapper">
            {todo.length !== 0 &&
                <ul className="todo-list">
                    {
                        todo.map((data, i) => (
                            <li className="todo-item" key={i}>
                                <pre className="todo-info">{data}</pre>
                                <button className="edit-btn" onClick={() => onEditHandle(i)}><FontAwesomeIcon icon={faPenToSquare} /></button>
                                <button className="delete-btn" onClick={() => onDeleteHandle(i)}><FontAwesomeIcon icon={faTrash} /></button>
                            </li>
                        ))
                    }
                </ul>
            }
        </div >
    );
}

export default TodoList;