import React, { useState } from "react";

function ChangeSize() {
  const [width, setWidth] = useState(200);
  const [height, setHeight] = useState(200);
  const [inputWidth, setInputWidth] = useState();
  const [inputHeight, setInputHeight] = useState();

  const changeSize = () => {
    setWidth(inputWidth);
    setHeight(inputHeight);
  };
  return (
    <div>
      <div
        style={{
          backgroundColor: "red",
          border: "3px solid gray",
          width,
          height,
        }}
      ></div>
      <label htmlFor="">
        Width
        <input
          type="number"
          value={inputWidth}
          onChange={(e) => setInputWidth(parseInt(e.target.value))}
        />
      </label>
      <label htmlFor="">
        Height
        <input
          type="number"
          value={inputHeight}
          onChange={(e) => setInputHeight(parseInt(e.target.value))}
        />
      </label>
      <button onClick={changeSize}>Change Size</button>
    </div>
  );
}

export default ChangeSize;
