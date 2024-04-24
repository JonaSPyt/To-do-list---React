import { useState } from 'react'
import './App.css'

import Todo from './components/Todo'
import TodoForm from './components/TodoForm'
import Search from './components/Search'
import Filter from './components/Filter'

function App() {
  const [id, setId] = useState(0)
  const [todos, setTodos] = useState(
    [

    ]
  )

  const [search, setSearch] = useState("")

  const [filter, setFilter] = useState("All")
  
  const [sort, setSort] = useState("Asc")


  const addTodo = (text, category) => {
    console.log(id)
    const newTodos = [...todos, {
      id: id,
      text,
      category,
      isCompleted: false,

    }]
    setId(id + 1)
    setTodos(newTodos);
  }
  const removeTodos = (id) => {
    const filteredTodos = todos.filter(todos => todos.id !== id ? todos : null)
    setTodos(filteredTodos)
  }
  const completeTodos = (id) => {
    const newTodos = [...todos]
    newTodos.map((todos) => todos.id === id ? todos.isCompleted = !todos.isCompleted : todos)
    setTodos(newTodos)
  }
  return (
    <div className='app'>
      <h1>Lista de tarefas</h1>
      <Search search={search} setSearch={setSearch} />
      <Filter filter={filter} setFilter={setFilter} setSort={setSort} />
      <div className='todo-list'>
        {
          todos.filter((todo) => filter === "All" ? true : filter === "Completed" ? todo.isCompleted : 
          !todo.isCompleted).filter((todo) => (todo.text.toLowerCase().includes(search.toLowerCase()))).sort((a,b) => sort === "Asc" ? a.text.localeCompare(b.text) :
          b.text.localeCompare(a.text) ).map((todo) => (
            <Todo key={todo.id} todo={todo} removeTodos={removeTodos} completeTodos={completeTodos} />
          ))
        }
      </div>
      <TodoForm addTodo={addTodo} />
    </div>
  )
}

export default App
