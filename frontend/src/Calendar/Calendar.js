import { useState, useEffect } from "react";
import Cell from "./cell/Cell";
import Weekday from "./cell/Weekday";
import CalendarData from "../Controller/CalendarData";
import CalendarHeader from "./CalendarHeader/CalendarHeader";
// Use the imported functions as needed
function Calendar() {
  const [calendarData, setCalendarData] = useState([]);
  // change it for with a function
  const [currentDate, setCurrentDate] = useState({
    month: "October",
    month_number: 10,
    day_number: 25,
    year: 2023,
  });
  const numberElements = [];

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
        currentDate={currentDate}
      />
    );
  }
  return (
    <>
      <div className="calendar_element">
        <CalendarHeader />
        <div className="calendar_container_month">
          <Weekday WeekdayName={"Mon"} />
          <Weekday WeekdayName={"Tue"} />
          <Weekday WeekdayName={"Wen"} />
          <Weekday WeekdayName={"Thu"} />
          <Weekday WeekdayName={"Fri"} />
          <Weekday WeekdayName={"Sat"} />
          <Weekday WeekdayName={"Sun"} />
          {numberElements}
        </div>
      </div>
    </>
  );
}
export default Calendar;
