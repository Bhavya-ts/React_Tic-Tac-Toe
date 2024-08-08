import React, { useContext, useRef, useState } from "react";
import { ToDoListContext } from "./Contexts/todoListContext";

export default function TodoList() {
  const {
    todoList,
    // refId,
    addTodoItem,
    removeTodoItem,
    restoreItem,
    markAsCompleted,
    // revertTheDeletedTodo,
  } = useContext(ToDoListContext);
  //   const refrenceToDeletedItem = useRef(null);
  const [toDoInput, setToDoInput] = useState("");

  return (
    <>
      <div>
        <h1>The ToDo List</h1>

        <div>
          <h3>Add Todo you want to add : </h3>
          <input
            type="text"
            value={toDoInput}
            onChange={(e) => {
              setToDoInput(e.target.value);
            }}
          ></input>
          <button onClick={() => addTodoItem(toDoInput)}>Add ToDo</button>
          <button onClick={() => restoreItem()}>Restore the data</button>
        </div>
        <br />
        <br />
        {todoList.length === 0 ? (
          <>No ToDo found</>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Label</th>
                <th>completed Or Not</th>
                <th>buttom</th>
                <th>button</th>
              </tr>
            </thead>

            <tbody>
              {todoList.map((list) => (
                <tr key={list.id}>
                  <td>{list.label}</td>
                  <td>{list.complete ? "Yes" : "No"}</td>
                  <td>
                    <button onClick={() => markAsCompleted(list.id)}>
                      Change Status
                    </button>
                  </td>
                  <td>
                    <button onClick={() => removeTodoItem(list.id)}>
                      Delete the Item
                    </button>
                    {/* {refId !== list.id ? (
                    <button onClick={() => removeTodoItem(list.id)}>
                      Delete the Item
                    </button>
                  ) : (
                    <button onClick={() => revertTheDeletedTodo()}>
                      Revert the ToDo
                    </button>
                  )} */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}
