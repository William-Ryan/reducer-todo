import React from 'react';

const Todo = ({ state, handleToggle }) => {

    return(
        <div>
            {state.map(todo =>{
                return <p className={`$todo.completed ? 'all done' : ''}`}
                id={todo.id} onClick={handleToggle}> 
                Item To Do: {todo.item} Completed: {String(todo.completed)}</p>
            })}
        </div>
    )
};

export default Todo;