import React, { useState, useReducer } from 'react';
import { todoReducer, todoList } from '../reducers';

const TodoList = () => {
    const [addNew, setAddNew] = useState('');

    const [state, dispatch] = useReducer(todoReducer, todoList);

    const handleChanges = e => {
        setAddNew(e.target.value);
    };

    const clearComplete = () => { 
        dispatch({ type: 'TODO_COMPLETE' });

    };

    const addNewTodo = () => {
        dispatch({ type: 'ADD_TODO', payload: addNew });
    };

return (
    <div>
       {state.new} ? (
          <div>
            <input className='add-new'
                type='text'
                name='Add New'
                value={addNew}
                onChange={handleChanges}
             />   
         <button onClick={addNewTodo}>Add New Todo</button>          

       ) : (
           <hi>Todo Today</hi>
           
           
           
         <button onClick={clearComplete}>Done!</button>  
     )     
        </div> 
       ) 
    </div>
  )
}

export default TodoList;           
              
  