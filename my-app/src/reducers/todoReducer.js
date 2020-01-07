export const todoList = [
    {
        item: 'Shave the Cat',
        completed: false,
        id: 489294
    },
    
    {
        item: 'Consolidate notbooks already',
        completed: false,
        id: 2934839
    },

    {
        item: 'Learn Russian',
        completed: false,
        id: 0248958
    }
];

export const todoReducer = (state = todoList, action) => {
    switch(action.type) {
        case 'TODO_COMPLETE':
            // replace toggleOn w toggle()
            return { ...state, item: action.payload, completed: toggleOn };
        case 'ADD_TODO': {
            return { ...state, item: action.payload, completed: false, id: new Date() };
       default: 
       
            return state;
                 
     }  
}; 