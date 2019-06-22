import React from 'react'

function Todo(props) {
    const myTodos = props.info.map(todo => {
        return (
            <div key={todo._id}>
                <h1>{todo.title}</h1>
                <h3>{todo.description}</h3>
            </div>
        )

    })
    return (
        <div>
            {myTodos}
        </div>
    )

}

export default Todo;