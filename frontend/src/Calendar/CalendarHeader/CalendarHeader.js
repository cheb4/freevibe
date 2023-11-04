import React from "react";

function CalendarHeader() {
  const forward = ">";
  const backward = "<";

  return (
    <div className="calendar_header">
      <div className="month_and_year">NOVEMBER 2023</div>
      <div className="monthNavigation">
        <div className="back"> {backward} </div>
        <div className="frorward"> {forward} </div>
      </div>
    </div>
  );
}

export default CalendarHeader;
