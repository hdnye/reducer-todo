import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <hi1>Todo Today</hi1>
         <TodoList />
         <AddTodo />
      </header>
    </div>
  );
}

export default App;
