// import moment from "moment";
//     // month: "October",
//     // month_number: 11,
//     // day_number: 25,
//   /  // year: 2023,
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
function getCurrentDate() {
  const today = new Date();
  const month = today.getMonth();
  const year = today.getFullYear();
  const date = today.getDate();
  // console.log(monthNames[2]);

  return {
    month: monthNames[month],
    month_number: month + 1,
    day_number: date,
    year: year,
  };
}

export { getCurrentDate };
