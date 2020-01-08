import React, { useReducer } from 'react';
import { todoList, todoReducer } from '../reducers/indexReducer';
import ClearComplete from './ClearComplete';

const TodoList = e => {
    const [state, dispatch] = useReducer(todoReducer, todoList);
    return (
    <div>
      {state.map(todo => <ClearComplete key={todo.id} todo={todo} dispatch={dispatch} />)}
   </div>
  ); 
};

export default TodoList;         
           
           
      
              
  