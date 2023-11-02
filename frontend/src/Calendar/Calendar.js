import { useState, useEffect } from "react";
import Cell from "./cell/Cell";
import Weekday from "./cell/Weekday";
import CalendarData from "../Controller/CalendarData";
import { thisMonthJsonObjectFromMondayToSunday } from "./helperFunctions/CalendarNumbers";
// Use the imported functions as needed
function Calendar() {
  const [calendarData, setCalendarData] = useState([]);
  const numberElements = [];
  const YEAR = 2023;
  const MONTH = 10;

  useEffect(() => {
    CalendarData.getAll().then((response) => setCalendarData(response));
  }, []);

  // const thisMonthFromMondayToSunday = thisMonthJsonObjectFromMondayToSunday(
  //   YEAR,
  //   MONTH
  // );
  // console.log(calendarData);

  for (const day of calendarData) {
    numberElements.push(
      <Cell
        key={`${day.day}-${day.month_number}-${day.year}`}
        data={day}
        number={day.day}
        cellNumberAdditional={""}
        cellAdditionalName={""}
      />
    );
  }

  return (
    <>
      <div className="calendar_container">
        <Weekday WeekdayName={"Mon"} />
        <Weekday WeekdayName={"Tue"} />
        <Weekday WeekdayName={"Wen"} />
        <Weekday WeekdayName={"Thu"} />
        <Weekday WeekdayName={"Fri"} />
        <Weekday WeekdayName={"Sat"} />
        <Weekday WeekdayName={"Sun"} />
        {numberElements}
      </div>
    </>
  );
}
export default Calendar;
