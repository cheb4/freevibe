const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser"); // Middleware for parsing JSON

const app = express();
const port = 3005;

app.use(cors());
app.use(bodyParser.json());

const processedDB = require("./helperFunctions/DbProcessing");
// for development purposes
console.log("hello");
// for development purposes
app.get("/", (req, res) => {
  console.log(req);
  res.sendStatus(200);
});
app.post("/api/data/", (req, res) => {
  // res.send("Hello World!");
  // console.log(calendarHelper(YEAR, MONTH));
  // console.clear();
  console.log("I did send data from get processedDB");

  const YEAR = req.body.year;
  const MONTH = req.body.month_number;
  console.log(req.body);
  // const YEAR = 2023;
  // const MONTH = 11;
  // res.send("iii");
  console.log(`year ${YEAR} month is ${MONTH}`);
  res
    .send(JSON.stringify(processedDB.calendarWithCompleteNotes(YEAR, MONTH)))
    .status(200);
});
app.post("/api/data/free", (req, res) => {
  // res.send("Hello World!");
  // console.log(calendarHelper(YEAR, MONTH));
  // console.clear();
  console.log("I did send data from get processedDB");

  console.log(req.body);
  // const YEAR = 2023;
  // const MONTH = 11;
  // res.send("iii");
  // console.log(`${req.body}`);
  res.status(200);
});

app.post("/test/", (req, res) => {
  console.clear();
  console.log("test");
  console.log(`year is ${req.body.year}`);
  console.log(`month is ${req.body.month}`);

  console.log("test");
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
