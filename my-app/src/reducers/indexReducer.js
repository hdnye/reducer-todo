export const todoList = {
    item: '',
    complted: false,
    
};


export const todoReducer = (state = todoList, action) => {

    switch(action.type) {
        
        case 'ADD_TODO': 
            // add .map()
            return { ...state, item: action.payload, completed: false, id: new Date() };
        case 'TODO_COMPLETE': 
            // add toggle() & .map()
            return { ...state, item: action.payload, completed: toggleOn };
        case 'CLEAR_TODO':
            return state.filter((item) => !item.completed);    

        default: 
            return state;
                 
     }  
}; 