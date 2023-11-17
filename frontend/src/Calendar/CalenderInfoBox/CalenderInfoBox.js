import React from "react";
import InfoAboutFreePeople from "./InfoAboutFreePeople";

function CalenderInfoBox({
  isVisible,
  DataToDisplay,
  changeVisibilityOFInfoBox,
  declareInfoBoxFreedom,
}) {
  let CalendarInfoBoxCss = "CalendarInfoBox";
  if (!isVisible) {
    CalendarInfoBoxCss += " invisible";
  }
  // console.log(DataToDisplay);

  return (
    <div className={CalendarInfoBoxCss}>
      <h1>{DataToDisplay.day}</h1>
      <h2>{DataToDisplay.week_day}</h2>
      <InfoAboutFreePeople free={DataToDisplay.free} />

      <input
        className="InfoBoxFreeButton"
        type="button"
        onClick={() => declareInfoBoxFreedom(DataToDisplay)}
        value="I am free that day"
      />

      <input
        className="InfoBoxFreeButton"
        type="button"
        onClick={changeVisibilityOFInfoBox}
        value="close"
      />
    </div>
  );
}

export default CalenderInfoBox;
