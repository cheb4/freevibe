import React from "react";

function CalenderInfoBox({ isVisible, DataToDisplay }) {
  let CalendarInfoBoxCss = "CalendarInfoBox";
  if (isVisible) {
    CalendarInfoBoxCss += " visible";
  }
  console.log(DataToDisplay);
  return (
    <div className={CalendarInfoBoxCss}>
      <h1>{DataToDisplay.day}</h1>
      <h2>{DataToDisplay.week_day}</h2>
    </div>
  );
}

export default CalenderInfoBox;
