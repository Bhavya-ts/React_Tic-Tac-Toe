import React, { useCallback, useEffect, useMemo, useState } from "react";

export default function ListItem() {
  const list = ["Iphone", "Samsung", "One+", "Xiomi", "Realme", "Mi"];

  const [input, setInput] = useState("");
  //   const [filered, setFiltered] = useState(list);
  const changeInputState = useCallback((e) => {
    console.log(e.target.value);
    setInput(e.target.value);
  }, []);

  const filered = useMemo(() => {
    return list.filter((item) =>
      item.toLowerCase().includes(input.toLowerCase())
    );
  }, [list, input]);

  return (
    <>
      <input type="text" onChange={changeInputState}></input>
      <ul>
        {filered.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}
