import React from "react";

function CalendarHeader({ DateToDisplay, nextMonth, previousMonth }) {
  const forward = ">";
  const backward = "<";

  return (
    <div className="calendar_header">
      <div className="month_and_year">
        {DateToDisplay.month} {DateToDisplay.year}
      </div>
      <div className="monthNavigation">
        <div className="back" onClick={previousMonth}>
          {" "}
          {backward}{" "}
        </div>
        <div className="frorward" onClick={nextMonth}>
          {" "}
          {forward}{" "}
        </div>
      </div>
    </div>
  );
}

export default CalendarHeader;
