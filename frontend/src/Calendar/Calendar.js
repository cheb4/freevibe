import { useState, useEffect } from "react";
import Cell from "./cell/Cell";
import Weekday from "./cell/Weekday";
import CalendarData from "../Controller/CalendarData";
import CalendarHeader from "./CalendarHeader/CalendarHeader";
import {
  getCurrentDate,
  addAMonth,
  subtractAMonth,
} from "./helperFunctions/CurrentDate";

function Calendar() {
  const [calendarData, setCalendarData] = useState([]);
  const [DateToDisplay, setDateToDisplay] = useState({});

  // effective parts start here :D
  useEffect(() => {
    CalendarData.getAll().then((response) => setCalendarData(response));
  }, []);

  useEffect(() => {
    setDateToDisplay(getCurrentDate());
  }, []);
  // effective parts end here :(

  const numberElements = [];
  for (const day of calendarData) {
    numberElements.push(
      <Cell
        key={`${day.day}-${day.month_number}-${day.year}`}
        data={day}
        number={day.day}
        DateToDisplay={DateToDisplay}
      />
    );
  }

  const nextMonth = () => {
    setDateToDisplay(addAMonth(DateToDisplay));
  };
  const previousMonth = () => {
    setDateToDisplay(subtractAMonth(DateToDisplay));
  };

  return (
    <>
      <div className="calendar_element">
        <CalendarHeader
          DateToDisplay={DateToDisplay}
          nextMonth={nextMonth}
          previousMonth={previousMonth}
        />
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
