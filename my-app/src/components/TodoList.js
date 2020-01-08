import React, { useReducer } from 'react';
import { todoList, todoReducer } from '../reducers/indexReducer';
import ClearComplete from './ClearComplete';

const TodoList = e => {
    const [state, dispatch] = useReducer(todoReducer, todoList);
    console.log(state.todoList);
    return (
    <div>
      {state.todoList.map(item => <ClearComplete key={item.id} item={item} dispatch={dispatch} />)}
   </div>
  ); 
};

export default TodoList;         
           
           
      
              
  