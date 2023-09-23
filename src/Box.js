import React from 'react';
import './Box.css';

function Box ({ id, width = 10, height = 10, backgroundColor = "red", removeBox }) {
  // const boxStyle = {
  //   width: `${width}px`,
  //   height: `${height}px`,
  //   backgroundColor: `${backgroundColor}`,

  // };

  const remove = () => removeBox(id);
    return (
    // <div className="Box">
    //   <div className="Box-box" style={boxStyle}></div>
    //   <button className="Box-remove" onClick={removeBox}>
    //     X
    //   </button>
    // </div>

    <div>
      <div
       style={{
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor
      }}
      />
      <button onClick={remove}>Click Box to Remove!</button>
    </div>
  );
}

export default Box;