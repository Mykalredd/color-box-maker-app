import React, { useState } from 'react';

const NewBoxForm = ({ addBox }) => {
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (width && height) {
      const newBox = {
        width: Number(width),
        height: Number(height),
        backgroundColor,
      };

      addBox(newBox);

      setWidth('');
      setHeight('');
      setBackgroundColor('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Width:
        <input
          type="number"
          value={width}
          onChange={(event) => setWidth(event.target.value)}
        />
      </label>
      <label>
        Height:
        <input
          type="number"
          value={height}
          onChange={(event) => setHeight(event.target.value)}
        />
      </label>
      <label>
        Background Color:
        <input
          type="color"
          value={backgroundColor}
          onChange={(event) => setBackgroundColor(event.target.value)}
        />
      </label>
      <button type="submit">Add Box</button>
    </form>
  );
};

export default NewBoxForm;