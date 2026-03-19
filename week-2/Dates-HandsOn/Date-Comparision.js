/*
Assignment 2: Date Comparison & Validation (Beginner → Intermediate)
--------------------------------------------------------------------

 Given:
      let enrollmentDeadline = new Date("2026-01-20");

Tasks:
  1.Check if:
      * Today is before deadline → "Enrollment Open"
      * Today is after deadline → "Enrollment Closed"

  2. Validate user input date:
      * Input: "2026-02-30"
      * Detect whether the date is valid or invalid
*/

// Given deadline
let enrollmentDeadline = new Date("2026-01-20");

// 1. Check enrollment status
let today = new Date();

if (today < enrollmentDeadline) {
  console.log("Enrollment Open");
} else {
  console.log("Enrollment Closed");
}

// 2. Validate user input date
let inputDateStr = "2026-02-30";
let inputDate = new Date(inputDateStr);

// Extract parts from input
let parts = inputDateStr.split("-");
let year = Number(parts[0]);
let month = Number(parts[1]) - 1;
let day = Number(parts[2]);

let isValidDate =
  inputDate.getFullYear() === year &&
  inputDate.getMonth() === month &&
  inputDate.getDate() === day;

if (isValidDate) {
  console.log("Valid Date");
} else {
  console.log("Invalid Date");
}
