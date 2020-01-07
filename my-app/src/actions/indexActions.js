export const addNewTodo = () => {
    return { type: 'ADD_TODO'};
};

export const todoComplete = () => {
    return { type: 'TODO_COMPLETE'};
};

export const clearTodo = () => {
    return { type: 'CLEAR_TODO'};
};