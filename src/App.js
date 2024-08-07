import userEvent from "@testing-library/user-event";
import React, { useState } from "react";
import Counter from "./counte";
import UserProfile from "./UserProfile";
import ListItem from "./ListItem";
import FocusInput from "./focusInput";
function App() {
  const value = "-";
  const [userId, setUserId] = useState(0);
  const [showUSer, setShowUser] = useState(false);
  const [sign, setSign] = useState(true);
  const [metrix, setMetrix] = useState([
    ["-", "-", "-"],
    ["-", "-", "-"],
    ["-", "-", "-"],
  ]);
  function onClickHandler(row, col) {
    console.log("called");
    let copy = [...metrix];
    if (copy[row][col] != "-") {
      return;
    }
    if (sign == true) {
      copy[row][col] = "O";
    } else {
      copy[row][col] = "X";
    }
    setMetrix(copy);
    setSign(!sign);
  }
  return (
    <>
      <div className="status">
        <h1>tic toc</h1>
        {metrix.map((row, rowIndex) => {
          // console.log("row = ", rowIndex);
          return (
            <div className="raw">
              {row.map((col, colINdex) => {
                // console.log("col = ", colINdex);
                return (
                  <button
                    id={colINdex}
                    onClick={() => onClickHandler(rowIndex, colINdex)}
                  >
                    {col}
                  </button>
                );
              })}
            </div>
          );
        })}
      </div>

      {/* for usestate function  */}
      <Counter />
      <br></br>

      {/* use of useEffect */}
      <div>
        <label>UserId : </label>
        <input
          type="number"
          onChange={(e) => {
            setUserId(e.target.value);
          }}
        ></input>
      </div>

      <UserProfile userId={userId} />

      <ListItem />
      <FocusInput />
    </>
  );
}
export default App;
