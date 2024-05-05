import React ,{useState} from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../feature/todo/todoSlice";
const AddTodo = ()=>{
    
    const [input,setInput] = useState(""); //handle inputs from the input box for todos
    const dispatch = useDispatch();

    const addTodoHandler = (e)=>{
        // this funciton handles what todo when the add button is clicked and add tod item to list
        e.preventDefault(); 
        dispatch(addTodo(input)) // sends the input to store and addtodo function adds input to list
        setInput("");
    }
    return(
        // form used to take todo input
        <form onSubmit={addTodoHandler}>
            <input type="text" placeholder="enter todo.." className="inputBox" value={input} onChange={(e) => setInput(e.target.value)} />
            <button className="addTodoButton" type="submit" >Add Todo</button>
        </form>
    )
}

export default AddTodo;