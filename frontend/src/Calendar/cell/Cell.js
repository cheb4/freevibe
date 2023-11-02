import React from "react";

const Cell = ({ data, number, cellNumberAdditional, cellAdditionalName }) => {
  const cellNumberName = `cell_number ${cellNumberAdditional}`;
  const cellName = `cell ${cellAdditionalName}`;
  // const key = data.day + data.month_number + data.year;

  return (
    <div className={cellName}>
      <div className={cellNumberName}>{number}</div>
    </div>
  );
};

export default Cell;
