import React, { useState } from 'react';
//mock List
import List from "./List.json";
//components
import Header from "./Header";
import TodoList from "./TodoList";
import TodoPage from './TodoPage';

function App() {
  
  const [ toDoList, setToDoList ] = useState(List);

  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task};
    });
    setToDoList(mapped);
  }

  const handleFilter = () => {
    let filtered = toDoList.filter(task => {
      return !task.complete;
    });
    setToDoList(filtered);
  }

  const addTask = (userInput ) => {
    let copy = [...toDoList];
    copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false }];
    setToDoList(copy);
  }

  return (
    <div className="App">
      <Header />
      <TodoList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter}/>
      <TodoPage addTask={addTask}/>
    </div>
  );
}

export default App;
