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
  return {
    month: monthNames[month],
    month_number: month + 1,
    day_number: date,
    year: year,
  };
}

function addAMonth(monthToAdd) {
  let month_number = monthToAdd.month_number + 1;
  let day_number = monthToAdd.day_number;
  let year = monthToAdd.year;
  if (month_number === 13) {
    month_number = 1;
    year = monthToAdd.year + 1;
  }
  return {
    month: monthNames[month_number - 1],
    month_number: month_number,
    day_number: day_number,
    year: year,
  };
}

function subtractAMonth(monthToSubtract) {
  let month_number = monthToSubtract.month_number - 1;
  let day_number = monthToSubtract.day_number;
  let year = monthToSubtract.year;
  if (month_number === 0) {
    month_number = 12;
    year = monthToSubtract.year - 1;
  }
  return {
    month: monthNames[month_number - 1],
    month_number: month_number,
    day_number: day_number,
    year: year,
  };
}

export { getCurrentDate, addAMonth, subtractAMonth };
