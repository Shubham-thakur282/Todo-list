import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'


function App() {

  return (
    <div className="app">
      <h1>Todo List</h1>
      <AddTodo />
      <Todos />
    </div>
  )
}

export default App
