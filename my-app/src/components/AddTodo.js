import React, { useState, useReducer} from 'react';
import { todoList, todoReducer } from '../reducers/indexReducer';
import TodoList from './TodoList';
// import { addNewTodo } from '../actions/indexActions';

const AddTodo = e => {
    const [item, setItem] = useState('');
    const [state, dispatch] = useReducer(todoReducer, todoList);

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
            <button type='submit' onClick={(e => dispatch({type: 'CLEAR_TODO'}))}>Clear Completed</button>
       </form>
   </div>
  ); 
};  

export default AddTodo;
     
 