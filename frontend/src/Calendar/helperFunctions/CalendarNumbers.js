import moment from "moment";

export const thisMonthJsonObject = (year, monthNumber) => {
  // returns this month of days plus weekdays
  const date = moment({ year, month: monthNumber - 1 });
  const currentDate = moment(date);
  const daysInMonth = currentDate.daysInMonth();
  const daysArray = [];

  for (let day = 1; day <= daysInMonth; day++) {
    const date = moment(currentDate).date(day);
    const dayObject = {
      day: day,
      week_day: date.format("dddd"),
      month_number: monthNumber,
      year: year,
    };
    daysArray.push(dayObject);
  }
  return daysArray;
};

// return from monday

const getFromMonday = (arr) => {
  if (arr[0]["week_day"] === "Monday") {
    return arr;
  }
  // get how mutch need to go to Monday
  let daysToGo;
  if (arr[0]["week_day"] === "Tuesday") {
    daysToGo = 1;
  } else if (arr[0]["week_day"] === "Wednesday") {
    daysToGo = 2;
  } else if (arr[0]["week_day"] === "Thursday") {
    daysToGo = 3;
  } else if (arr[0]["week_day"] === "Friday") {
    daysToGo = 4;
  } else if (arr[0]["week_day"] === "Saturday") {
    daysToGo = 5;
  } else if (arr[0]["week_day"] === "Sunday") {
    daysToGo = 6;
  }

  let year = arr[0]["year"];
  let monthNumber = arr[0]["month_number"];

  // check if starts on new year
  if (monthNumber == "1") {
    year = year + 1;
    monthNumber = 13;
  }

  const lastDayOfLastMonth = moment({ year, month: monthNumber - 2 }).endOf(
    "month"
  );
  const lastDays = [];
  for (let i = 0; i < daysToGo; i++) {
    const day = lastDayOfLastMonth.clone().subtract(i, "days");
    const dayObject = {
      day: Number(day.format("D")),
      week_day: day.format("dddd"),
      month_number: Number(day.format("M")),
      year: Number(day.format("YYYY")),
    };
    // console.log(dayObject);
    lastDays.push(dayObject);
  }
  return lastDays.reverse().concat(arr);
};

// console.log(getFromMonday(thisMonthJsonObject(2023, 9)));

// get to sunday

const getToSunday = (arr) => {
  if (arr.at(-1)["week_day"] === "Sunday") {
    return arr;
  }
  // console.log();
  let daysToGo;
  if (arr.at(-1)["week_day"] === "Saturday") {
    daysToGo = 1;
  } else if (arr.at(-1)["week_day"] === "Friday") {
    daysToGo = 2;
  } else if (arr.at(-1)["week_day"] === "Thursday") {
    daysToGo = 3;
  } else if (arr.at(-1)["week_day"] === "Wednesday") {
    daysToGo = 4;
  } else if (arr.at(-1)["week_day"] === "Tuesday") {
    daysToGo = 5;
  } else if (arr.at(-1)["week_day"] === "Monday") {
    daysToGo = 6;
  }
  let year = arr[0]["year"];
  let monthNumber = arr[0]["month_number"];
  // check if it is end of the year
  if (monthNumber == 12) {
    year = year + 1;
    monthNumber = 0;
  }
  // console.log(year);
  const firstDaysOfMonth = moment({ year, month: monthNumber }).startOf(
    "month"
  );
  // console.log(firstDaysOfMonth);
  // console.log(moment({ year: 2024, month: 11 }).startOf("month"));
  const lastDays = [];
  for (let i = 0; i < daysToGo; i++) {
    const day = firstDaysOfMonth.clone().add(i, "days");
    // console.log(day);

    const dayObject = {
      day: Number(day.format("D")),
      week_day: day.format("dddd"),
      month_number: Number(day.format("M")),
      year: Number(day.format("YYYY")),
    };
    lastDays.push(dayObject);
  }
  return arr.concat(lastDays);
};

// console.log(getFromMonday(thisMonthJsonObject(2023, 1)));
export const thisMonthJsonObjectFromMondayToSunday = (year, monthNumber) => {
  return getFromMonday(getToSunday(thisMonthJsonObject(year, monthNumber)));
};
