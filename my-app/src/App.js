import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import ClearComplete from './components/ClearComplete';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo Today</h1>
         <TodoList />
         <AddTodo />
         <ClearComplete />
      </header>
    </div>
  );
}

export default App;
