import userEvent from "@testing-library/user-event";
import React, { useState } from "react";

function App() {
  const value = "-";
  const [sign, setSign] = useState(true);
  const [metrix, setMetrix] = useState([
    ["-", "-", "-"],
    ["-", "-", "-"],
    ["-", "-", "-"],
  ]);
  function winLogic(col, row, sign, co) {
    let count = 0;

    // if (count == 4 || row == -1 || col == -1 || row == 3 || col == 3) {
    //   return;
    // }
    // if (count == 3 && metrix[row][col] == sign) {
    //   console.log("we have a winner ...", sign);
    //   return;
    // }
    // if (metrix[row][col] == sign) {
    //   winLogic(col - 1, row, sign, count++);
    //   winLogic(col + 1, row, sign, count++);
    //   winLogic(col, row - 1, sign, count++);
    //   winLogic(col, row + 1, sign, count++);
    //   winLogic(col - 1, row - 1, sign, count++);
    //   winLogic(col - 1, row + 1, sign, count++);
    //   winLogic(col + 1, row - 1, sign, count++);
    //   winLogic(col + 1, row + 1, sign, count++);
    // }
    return;
  }
  function onClickHandler(row, col) {
    console.log("called");
    let copy = [...metrix];
    if (copy[row][col] != "-") {
      return;
    }
    if (sign == true) {
      copy[row][col] = "O";
      //   winLogic(col, row, "O", 1);
    } else {
      copy[row][col] = "X";
      //   winLogic(col, row, "X", 1);
    }
    //
    setMetrix(copy);

    setSign(!sign);

    // console.log(metrix);
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
    </>
  );
}
export default App;
