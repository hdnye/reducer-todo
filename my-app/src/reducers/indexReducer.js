export const todoList = {
     todoList: [
   { 
    item: 'Shave the Cat',
    completed: false,
    id: 389348403
   },
   {
     item: 'Drop off kids at the pool',
     completed: false,
     id: 393920   
    } 
  ]};


export const todoReducer = (state = todoList, action) => {

    switch(action.type) {
        
        case 'ADD_TODO': 
            // add event handler
            // return ({ ...state, item: action.payload });
            console.log(action)
            return { todoList: [...state.todoList, { item: action.payload, completed: false, id: new Date()  } ]};
        case 'TODO_COMPLETE': 
            // add toggle() & .map()
            return ({...state, item: action.payload, completed: true })
        case 'CLEAR_TODO':
            return state.filter((item) => !item.completed);    

        default: 
            return state;
                 
     }  
}; 