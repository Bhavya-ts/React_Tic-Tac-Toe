import React, { useReducer, useRef, useEffect, useState } from "react";

export const ToDoListContext = React.createContext();

const initialState = [];

const actions = {
  ADD_ITEM: "ADD_ITEM",
  DELETE_ITEM: "DELETE_ITEM",
  TOGGLE_ITEM: "TOGGLE_ITEM",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.ADD_ITEM:
      return [
        ...state,
        {
          id: new Date().valueOf(),
          label: action.todoItemLabel, // Fixed typo here
          complete: false,
        },
      ];

    case actions.DELETE_ITEM:
      console.log("Delete item is called : ", action.todoItemId);
      return state.filter((toDoItem) => toDoItem.id !== action.todoItemId);

    case actions.TOGGLE_ITEM:
      console.log("inside toggle logic ... ");
      return state.map((toDoItem) =>
        toDoItem.id === action.todoItemId
          ? { ...toDoItem, complete: !toDoItem.complete }
          : toDoItem
      );
    case actions.RESTORE:
      return action.prevList;
    default:
      return state;
  }
};

const usePrevious = (list) => {
  const prevValue = useRef();
  useEffect(() => {
    prevValue.current = list;
  }, [list]);

  return prevValue.current;
};

export const ToDoListProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // const deletedItemRef = useRef(null);
  // const [, setTriggerRender] = useState(false);
  const prevValueList = usePrevious(state);

  const value = {
    todoList: state,
    // refId: deletedItemRef.current,
    addTodoItem: (todoItemLabel) => {
      dispatch({ type: actions.ADD_ITEM, todoItemLabel });
    },
    removeTodoItem: (todoItemId) => {
      dispatch({
        type: actions.DELETE_ITEM,
        todoItemId: todoItemId,
      });
    },
    restoreItem: () => {
      dispatch({
        type: actions.RESTORE,
        prevList: prevValueList,
      });
    },

    // removeTodoItem: (todoItemId) => {
    //   console.log("Id that's want to be deleted : ", todoItemId);
    //   if (deletedItemRef.current == null) {
    //     deletedItemRef.current = todoItemId;
    //     console.log("log has been changed : ", deletedItemRef.current);
    //   } else {
    //     console.log(deletedItemRef.current);
    //     dispatch({
    //       type: actions.DELETE_ITEM,
    //       todoItemId: deletedItemRef.current,
    //     });
    //     deletedItemRef.current = todoItemId;
    //   }
    //   setTriggerRender((prev) => !prev);
    // },
    // revertTheDeletedTodo: () => {
    //   console.log("revert called ");
    //   deletedItemRef.current = null;
    //   console.log(deletedItemRef.current);
    //   setTriggerRender((prev) => !prev);
    // },
    markAsCompleted: (todoItemId) => {
      console.log("mark : ", todoItemId);
      dispatch({ type: actions.TOGGLE_ITEM, todoItemId });
    },
  };

  return (
    <ToDoListContext.Provider value={value}>
      {children}
    </ToDoListContext.Provider>
  );
};
