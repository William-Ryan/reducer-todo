import React from 'react';

export default function Todo(props){
    console.log(props, 'Todo.js props')
    return (
        <div
            onClick={() => props.toggleItem(props.item.id)}
            className={`item${props.item.completed ? ' completed ' : ''}`}
        >
            <p>{props.item.task}</p>
        </div>
    );
};