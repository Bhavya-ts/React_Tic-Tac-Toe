import userEvent from "@testing-library/user-event";
import React, { useEffect, useState } from "react";
import Counter from "./counte";
import UserProfile from "./UserProfile";
import ListItem from "./ListItem";
import FocusInput from "./focusInput";
import useWindowSize from "./useWindowSize";

function App() {
  const value = "-";
  const [userId, setUserId] = useState(0);
  const [showUSer, setShowUser] = useState(false);
  const windowSize = useWindowSize();
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
      <h1>useState</h1>
      {/* for usestate function  */}
      <Counter />
      <br></br>
      <h1>useEffect</h1>
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

      <h1>useCallBack and useMemo</h1>
      <ListItem />

      <h1>useRef</h1>
      <FocusInput />

      <h1>custom hook</h1>
      <p>Width: {windowSize[0]}</p>
      <p>Height: {windowSize[1]}</p>
    </>
  );
}
export default App;
