import React, { useReducer } from 'react';
import { todoReducer, todoList } from '../reducers/indexReducer';
import AddTodo from './AddTodo';
import ClearComplete from './ClearComplete';

const TodoList = props => {
    const [state, dispatch] = useReducer(todoReducer, todoList);

    // const handleChanges = e => {
    //     setAddNew(e.target.value);
    // };

    // const clearComplete = () => { 
    //     dispatch({ type: 'TODO_COMPLETE' });

    // };

    // const addNewTodo = () => {
    //     dispatch({ type: 'ADD_TODO', payload: addNew });
    // };

return (
    <div>
       <h1>Todo Today</h1> 
       <AddTodo dispatch={dispatch} />
       {/* {state.map(item => {
           return <ClearComplete key={item.id} item={item} dispatch={dispatch} />;
       })} */}
     </div>
  );
}

export default TodoList;         
           
           
      
              
  