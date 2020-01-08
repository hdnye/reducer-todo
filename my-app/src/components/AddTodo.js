import React, { useState, useReducer} from 'react';
import { todoList, todoRedcuer } from '../reducers/indexReducer';
import TodoList from './TodoList';


const AddTodo = ({ dispatch }) => {
    const [item, setItem] = useState('');

    const handleChanges = e => {
        e.preventDefault();
        setItem(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({
            type: 'ADD_TODO',
            payload: item
        });
        setItem('');
    }

    // const clearCompleted = e => {
    //     e.preventDefault();
    //     dispatch({
    //         type: 'TODO_COMPLETE',            
    //     });
    // };

 return (
     <div>
         <form onSubmit={(e => handleSubmit(e))}>
            <label htmlFor='todo'></label>
              <input className='add-todo'
                type='text'
                name='todo'
                placeholder='New Todo'
                value={item}
                onChange={(e => handleChanges(e))}
              /><br></br>
            <button type='submit'>Add New Todo</button><br></br>    
            <button type='submit' onClick={() => dispatch({type: 'CLEAR_TODO'})}>Clear Completed</button>
       </form>
   </div>
  ); 
};  

export default AddTodo;
     
 