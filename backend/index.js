const express = require("express");
const cors = require("cors");
//
const app = express();
const port = 3005;

app.use(cors());

const processedDB = require("./helperFunctions/DbProcessing");
// for development purposes
console.log("hello");
// for development purposes
app.get("/", (req, res) => {
  console.log(req);
  res.sendStatus(200);
});
app.get("/api/data/", (req, res) => {
  // res.send("Hello World!");
  // console.log(calendarHelper(YEAR, MONTH));
  console.log("I did send data from get processedDB");
  console.log(req);
  console.log("I did send data from get processedDB");
  const YEAR = 2023;
  const MONTH = 12;
  // res.send("iii");
  res
    .send(JSON.stringify(processedDB.calendarWithCompleteNotes(YEAR, MONTH)))
    .status(200);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
