import React, {useState} from 'react';

import './App.css';

const items = [
  {
    task: 'Do Laundry',
    id: 231,
    completed: false
  },
  {
      task: 'Wash Dishes',
      id: 232,
      completed: false 
  }
];


function App() {

  const [todoList, setTodoList] = useState(items);

  const toggleItem = (clickedId) => {
    const newTodos = todoList.map(todo => {
      if (todo.id === clickedId) {
        return {
          ...todo,
          completed: !todo.completed
        };
      } else {
        return todo;
      }
    })
    
    setTodoList({
      todoList: newTodos
    })
  }

  const addNewTodo = itemText => {
    const newTodo = {
      task: itemText,
      id: Date.now(),
      purchased: false
    };
    setTodoList({
      todoList: [...todoList, newTodo]
    });
  };

  const itemDelete = () => {
    const resetList = todoList.filter(items => !items.completed)

    setTodoList({
      todoList: resetList
    })
  }

  return (
    <div className="App">
    
    </div>
  );
}

export default App;
