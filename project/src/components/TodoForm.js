import React, { useState } from 'react'

export default function TodoForm(props){
    console.log(props, 'form props')

    const [newTodo, setNewTodo] = useState({
        task: ""
    });

    const handleChanges = e => {
        setNewTodo({
            ...newTodo,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        props.addNewTodo(newTodo);
        setNewTodo({name: ""});
    }

    const handleDelete = e => {
        e.preventDefault();
        props.itemDelete();
    };

    return(
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                name="task"
                value={newTodo.task}
                onChange={handleChanges}
            />
            <button>Add</button>
            <button onClick={handleDelete}>Clear Completed</button>
        </form>
    );

}