import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const TodoForm = ({ todo, setTodo, input, setInput, editIndex, setEditIndex }) => {

    const onInputChange = (value) => {
        setInput(value);
    };

    const onSubmitHandle = (e) => {
        e.preventDefault();
        if (editIndex === -1) {
            setTodo([...todo, input]);
        }
        else {
            todo[editIndex] = input;
            setEditIndex(-1);
        }
        setInput("");
    }

    return (
        <div className="todo-form">
            <form onSubmit={onSubmitHandle}>
                <div className="input-wrapper">
                    <input type="text" value={input} onChange={(e) => onInputChange(e.target.value)} className="input-todo" placeholder="Type your todo..." required />
                    <button type="submit" className="add-btn"><FontAwesomeIcon icon={faPlus} /></button>
                </div>
            </form>
        </div>
    );
}

export default TodoForm;