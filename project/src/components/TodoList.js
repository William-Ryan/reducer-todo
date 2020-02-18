import React from "react"

import Todo from "./Todo"

export default function TodoList(props){
    console.log(props)

    return (
        <div className="todo-list">
            {props.items.map(item => (
                <Todo key={item.id} item={item} toggleItem={props.toggleItem} />
            ))}
        </div>
    );
};