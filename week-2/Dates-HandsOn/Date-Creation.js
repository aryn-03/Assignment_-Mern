/*
Assignment 1: Date Creation & Extraction (Beginner)
---------------------------------------------------
Tasks:
       1. Create a Date object for current date & time.
       2. Extract and display:
                    * Year
                    * Month (human readable)
                    * Date
                    * Day of week
                    * Hours, minutes, seconds

      3. Display the date in this format:
                    DD-MM-YYYY HH:mm:ss

*/

// 1. Create Date object for current date & time
const now = new Date();

// 2. Extract values
const year = now.getFullYear();

const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const month = monthNames[now.getMonth()]; // human readable

const date = now.getDate();

const dayNames = [
  "Sunday", "Monday", "Tuesday", "Wednesday",
  "Thursday", "Friday", "Saturday"
];
const day = dayNames[now.getDay()];

const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();

// Display extracted values
console.log("Year:", year);
console.log("Month:", month);
console.log("Date:", date);
console.log("Day:", day);
console.log("Time:", hours, ":", minutes, ":", seconds);

// 3. Display in DD-MM-YYYY HH:mm:ss format

const formattedDate =
now.getDate() + "-" +
(now.getMonth() + 1) + "-" +
now.getFullYear() + " " +
now.getHours() + ":" +
now.getMinutes() + ":" +
now.getSeconds();
console.log("Formatted Date:", formattedDate);
