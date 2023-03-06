import {
    ADD_TODO,
    CHANGE_DISPLAY,
    DELETE_TODO,
    MARK_COMPLETED,
  } from "./actionTypes";

  import uniqid from 'uniqid'

  export const addNewTodo = (todo) => {
    return {
      type: ADD_TODO,
      payload: {
        id: uniqid(),
        text: todo?.text,
      },
    };
  };

  export const deleteTodo = (id) => {
    return {
      type: DELETE_TODO,
      id,
    };
  };

  export const markTodoCompleted = (todo) => {
    return {
      type: MARK_COMPLETED,
      payload: {
        id: todo.id,
        text : todo.text
      }
    }
  }

  export const changeDisplay = (num) => {
    return {
      type : CHANGE_DISPLAY,
      payload : {
        num : num
      }
    }
  }
