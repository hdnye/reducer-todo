import React from 'react';
// import { todoList } from '../reducers/indexReducer';

const ClearTodo = ({ item, dispatch }) => {
    const toggleOn = () => {
        dispatch({
          type: 'TODO_COMPLETE',
          payload: item.id
        });
    };

    return (
    <div onClick={toggleOn}
        className={`item${item.completed ? 'completed': ''}`}
        style={{ textDecoration: item.completed ? 'line-through' : ''}} >      
      <p>{item.name}</p>   
    </div>
    );
};

export default ClearTodo;
