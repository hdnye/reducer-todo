import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';


function App() {
  return (
    <div className="App">
      <header className="App-header">
         <TodoList />
         <AddTodo />
      </header>
    </div>
  );
}

export default App;
