import React from "react"

function Todo({todo , removeTodos, completeTodos}){
    return(
    <div className='todo' style={
        {textDecoration: todo.isCompleted ? "line-through" : ""}
    }>
        <div className='content'>
            <p>{todo.text}</p>
            <p className="category">({todo.category})</p>
        </div>
        <div>
            <button onClick={()=>completeTodos(todo.id)} className="complete">Completar</button>
            <button onClick={()=>removeTodos(todo.id)} className="remove">x</button>
        </div>
    </div>
    )
}

export default Todo