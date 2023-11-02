import Cell from "./cell/Cell";
import Weekday from "./cell/Weekday";
import CalendarData from "../Controller/CalendarData";
import { thisMonthJsonObjectFromMondayToSunday } from "./helperFunctions/CalendarNumbers";
// Use the imported functions as needed
// console.log(thisMonthJsonObjectFromMondayToSunday(2023, 10));
function Calendar() {
  const numberElements = [];
  const YEAR = 2023;
  const MONTH = 10;
  // replace when api is here
  // console.log(CalendarData);
  CalendarData.getAll().then((response) => console.log(response));
  console.log(CalendarData);

  const thisMonthFromMondayToSunday = thisMonthJsonObjectFromMondayToSunday(
    YEAR,
    MONTH
  );

  for (const day of thisMonthFromMondayToSunday) {
    // console.log(day);
    numberElements.push(
      <Cell
        number={day.day}
        cellNumberAdditional={""}
        cellAdditionalName={""}
      />
    );
  }
  // for (let number = 1; number <= 31; number++) {
  //   numberElements.push(
  //     <Cell number={number} cellNumberAdditional={""} cellAdditionalName={""} />
  //   );
  // }

  return (
    <>
      <div className="calendar_container">
        <Weekday WeekdayName={"Monday"} />
        <Weekday WeekdayName={"Tuesday"} />
        <Weekday WeekdayName={"Wensday"} />
        <Weekday WeekdayName={"Thursday"} />
        <Weekday WeekdayName={"Friday"} />
        <Weekday WeekdayName={"Saturday"} />
        <Weekday WeekdayName={"Sunday"} />
        {numberElements}
      </div>
    </>
  );
}
export default Calendar;
