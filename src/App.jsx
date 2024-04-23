import { useState } from 'react'
import './App.css'
import Todo from './components/Todo'
import TodoForm from './components/TodoForm'

function App() {
  const [id,setId] = useState(0)
  const [todos, setTodos] = useState(
    [
      
    ]
  )

  const addTodo = (text,category) => {
    console.log(id)
    const newTodos = [...todos,{
      id: id,
      text,
      category,
      isCompleted: false,

    } ]
    setId(id+1)
    setTodos(newTodos);
  }
  const removeTodos = (id) =>{
      const filteredTodos = todos.filter(todos => todos.id !== id ? todos : null)
      setTodos(filteredTodos)
  }
  const completeTodos = (id) =>{
    const newTodos = [...todos]
    newTodos.map((todos) => todos.id === id ? todos.isCompleted = !todos.isCompleted : todos)
    setTodos(newTodos)
  }
  return (
    <div className='app'>
      <h1>Lista de tarefas</h1>
      <div className='todo-list'>
        {
          todos.map((todo)=> (
            <Todo key={todo.id} todo={todo} removeTodos={removeTodos} completeTodos={completeTodos}/>
          ))
        }
      </div>
      <TodoForm addTodo={addTodo}/>
    </div>
  )
}

export default App
