import React, {useState} from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

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

  const [todosList, setTodosList] = useState(items);

  const toggleItem = (clickedId) => {
    const newTodos = todosList.map(todo => {
      if (todo.id === clickedId) {
        return {
          ...todo,
          completed: !todo.completed
        };
      } else {
        return todo;
      }
    })
    
    setTodosList({
      todosList: newTodos
    })
  }

  const addNewTodo = todo => {
    const newTodo = {
      task: todo.task,
      id: Date.now(),
      completed: todo.completed
    };
    setTodosList({
      todosList: [...todosList, newTodo]
    });
  };

  const itemDelete = () => {
    const resetList = todosList.filter(items => !items.completed)

    setTodosList({
      todosList: resetList
    })
  }

  return (
    <div className="App">
      <div className="header">
        <h1>Todo List</h1>
        <TodoForm 
          addNewTodo={addNewTodo} 
          itemDelete={itemDelete}
        />
      </div>
      <TodoList 
        items={todosList} 
        toggleItem={toggleItem}
      />
    </div>
  );
}

export default App;
