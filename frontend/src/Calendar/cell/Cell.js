import React from "react";

const Cell = ({ number, cellNumberAdditional, cellAdditionalName }) => {
  const cellNumberName = `cell_number ${cellNumberAdditional}`;
  const cellName = `cell ${cellAdditionalName}`;
  return (
    <div className={cellName}>
      <div className={cellNumberName}>{number}</div>
    </div>
  );
};

export default Cell;
