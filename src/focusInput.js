import React, { useRef, useEffect, useState } from "react";

const FocusInput = () => {
  const inputRef = useRef([]);
  const [firstNAme, setFirstName] = useState("");
  const [lastNAme, setLastName] = useState("");

  const handleButtonClick = () => {
    if (!firstNAme) {
      inputRef.current[0].focus();
    }
    if (!lastNAme) {
      inputRef.current[1].focus();
    }
  };

  return (
    <div>
      <input
        ref={(el) => (inputRef.current[0] = el)}
        type="text"
        placeholder="First Name"
        name="firstNAme"
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
      />
      <input
        ref={(el) => (inputRef.current[1] = el)}
        type="text"
        placeholder="Last Name"
        name="lastName"
        onChange={(e) => {
          setLastName(e.target.value);
        }}
      />
      <button onClick={handleButtonClick}>Focus the input</button>
    </div>
  );
};

export default FocusInput;
