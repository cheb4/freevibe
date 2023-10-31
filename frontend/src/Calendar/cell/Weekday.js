import React from "react";

const Weekday = ({ WeekdayName }) => {
  const cellNumberName = `cell_number weekda`;
  const cellName = `cell weekday-cell`;
  return (
    <div className={cellName}>
      <div className={cellNumberName}>{WeekdayName}</div>
    </div>
  );
};

export default Weekday;
