const express = require("express");
const app = express();
const port = 3005;

// const calendarHelper = require("./helperFunctions/CalendarNumbers");

const processedDB = require("./helperFunctions/DbProcessing");
// for development purposes
const YEAR = 2023;
const MONTH = 10;
// for development purposes
app.get("/api/data", (req, res) => {
  // res.send("Hello World!");
  // console.log(calendarHelper(YEAR, MONTH));
  res.send(JSON.stringify(processedDB));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
