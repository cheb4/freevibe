import React from "react";
import FreePeople from "./FreePeople";

const Cell = ({
  data,
  number,
  DateToDisplay,
  changeVisibilityOFInfoBox,
  setInfoBoxData,
}) => {
  let cellNumberName = `cell_number `;
  let cellName = `cell  `;
  // if (data.free) {
  //   console.log(data);
  // // }
  // console.log(currentDate);
  // console.log(data);
  if (DateToDisplay.month_number !== data.month_number) {
    cellName += "inactive_cell";
    cellNumberName += "inactive_cell_number";
  }

  return (
    <div
      className={cellName}
      onClick={() => {
        changeVisibilityOFInfoBox();
        setInfoBoxData(data);
      }}
    >
      <FreePeople data={data} />
      <div className={cellNumberName}>{number}</div>
    </div>
  );
};

export default Cell;
