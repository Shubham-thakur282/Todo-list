import { createSlice, nanoid } from "@reduxjs/toolkit";

// we set up the initial state for our todolist items
const initialState = localStorage.getItem("reduxState")
  ? JSON.parse(localStorage.getItem("reduxState"))
  : {
      todos: [
        { id: 1, text: "Learn DSA at least 4 hours", completed: false },
        { id: 2, text: "Work on projects at least 2 hours", completed: false },
      ],
    };


//create slice for the todo
export const todoSlice = createSlice({
    name:"todo", // name of slice
    initialState, // initial state for todo
    reducers:{ // function that will work on the todo items
        addTodo:(state,action)=>{
            // function used to add a new todo item
            const todo = {
                id:nanoid(),
                text:action.payload,
                completed:false
            };
            state.todos.push(todo);
            // update the added todo item in local storage
            localStorage.setItem("reduxState", JSON.stringify(state));
        },
        removeTodo:(state,action)=>{
            // function used to delete a todo item
            state.todos = state.todos.filter((todo)=>todo.id !== action.payload)
            localStorage.setItem("reduxState", JSON.stringify(state));
        },
        updateTodo:(state,action)=>{
            // function used to update a todo item
            state.todos = state.todos.map((todo)=> todo.id === action.payload.id ? {...todo,text:action.payload.text,completed:action.payload.completed}:todo);
            localStorage.setItem("reduxState", JSON.stringify(state));
        },
    }
});

export const {addTodo,removeTodo,updateTodo} = todoSlice.actions;

export default todoSlice.reducer 