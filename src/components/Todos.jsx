import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../feature/todo/todoSlice";

const Todos = () => {
    const todos = useSelector(state => state.todos); // using this we get the access of the todos list item stored in local storage
    const dispatch = useDispatch();
    const [editText, setEditText] = useState(""); // used to handle the input when we update todo
    const [editId, setEditId] = useState(null); //use to keep track of id of the updated todo
    
    const handleEdit = (id, text) => {
        // used to handle the update todo
        setEditText(text);
        setEditId(id);
    }

    const handleUpdate = () => {
        // used to handle the update click
        // sent to local storage and update the todo
        if (editText.trim() === "") return;
        dispatch(updateTodo({ id: editId, text: editText }));
        setEditText("");
        setEditId(null);
    }

    const handleCheckboxChange = (id, text,completed) => {
        // used to handle if the todo is completed or not
        dispatch(updateTodo({ id: id, text : text , completed: !completed }));
    }

    return (
        // below is used to display all the todos and update them
        <div className="todos">
            <div className="title">Todos</div>
            <ul>
                {todos.map((todo) => (
                    <li className="todoItem" key={todo.id}>
                        {editId === todo.id ? (
                            <>
                                <input type="text" value={editText} className="inputBox" onChange={(e) => setEditText(e.target.value)} />
                                <button className="updateButton" onClick={handleUpdate}>Update</button>
                            </>
                        ) : (
                            <>
                                <input
                                    type="checkbox"
                                    checked={todo.completed}
                                    onChange={() => handleCheckboxChange(todo.id, todo.text,todo.completed)}
                                    className="checkBox"
                                />
                                <p className={todo.completed ? "todoText completed" : "todoText"}>{todo.text}</p>
                                <button className="editButton" onClick={() => handleEdit(todo.id, todo.text)}>Edit</button>
                                <button className="deleteButton" onClick={() => dispatch(removeTodo(todo.id))}>X</button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Todos;
