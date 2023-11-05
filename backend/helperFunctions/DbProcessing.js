const fromMondayToSunday = require("./CalendarNumbers");
//
// const YEAR = 2023;
// const MONTH = 11;
//
// fake db will have the data that will be need for the display
const fakeDB = require("./FakeDb");
// this one will be diesplayed
// const monthFromMondayToSunday = fromMondayToSunday(YEAR, MONTH);

const calendarWithCompleteNotes = (YEAR, MONTH) => {
  return fromMondayToSunday(YEAR, MONTH).map((objA) => {
    const matchingObjB = fakeDB.find((objB) => {
      return (
        objA.day === objB.day &&
        objA.month_number === objB.month_number &&
        objA.year === objB.year
      );
    });
    if (matchingObjB) {
      return matchingObjB;
    } else {
      return objA;
    }
  });
};
const exampleFun = () => console.log("uuu");
module.exports = { exampleFun, calendarWithCompleteNotes };
