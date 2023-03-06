 const ADD_TODO = 'ADD_TODO';
 const DELETE_TODO = 'DELETE_TODO';
 const MARK_COMPLETED = 'MARK_COMPLETED';
 const CHANGE_DISPLAY = 'CHANGE_DISPLAY';
 
//  import {
//   ADD_TODO,
//   CHANGE_DISPLAY,
//   DELETE_TODO,
//   MARK_COMPLETED,
// } from "..actions/actionTypes";

 /**
  * initial State of the app
  */
  const initialState = {
    activeList : [],
    completedList : [],
    activeDisplayNumber : 0,
  }


  const todoReducer = (state = initialState, action) => {
    switch (action.type) {

      case ADD_TODO:
        return {
          ...state,
          activeList: [
            ...state.activeList,
            action.payload
          ]
        };

      case DELETE_TODO:
        const newTodoList = state.completedList.filter((item) => item.id !== action.id);
        return {
          ...state,
          completedList: newTodoList,
        };

        case CHANGE_DISPLAY:
        return {
          ...state,
          activeDisplayNumber : action.payload.num
        };

        case MARK_COMPLETED:
          const newObj = {
            id: action.payload.id,
            text: action.payload.text
          }
          const newActiveList = state.activeList.filter((item) => item.id !== action.payload.id);
        return {
          ...state,
          activeList : newActiveList,
          completedList : [
            ...state.completedList,
            newObj
          ]
        };
        
        default:
          return state;
      }
    };
    
    export default todoReducer;